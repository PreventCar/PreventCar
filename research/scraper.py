"""Coleta controlada de metadados do Google Scholar para o projeto PreventCar.

Use apenas para pesquisa acadêmica responsável. O módulo não acessa o texto
integral dos artigos e não tenta contornar bloqueios ou desafios do provedor.
"""

from __future__ import annotations

import argparse
import csv
import hashlib
import json
import random
import sqlite3
import sys
import time
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Iterable

DEFAULT_QUERIES = [
    '"manutenção preventiva" veículos alertas',
    '"preventive maintenance" vehicles predictive alerts',
    '"vehicle maintenance" fleet management information system',
    '"road safety" vehicle maintenance failures',
    '"gestão de manutenção" frota veículos sistema',
]


@dataclass(frozen=True)
class Publication:
    query: str
    title: str
    authors: str
    year: str
    venue: str
    abstract: str
    url: str
    scholar_url: str


def normalize_text(value: object) -> str:
    """Converte campos opcionais do Scholar em texto exportável."""
    if value is None:
        return ""
    if isinstance(value, (list, tuple)):
        return "; ".join(str(item) for item in value)
    return " ".join(str(value).split())


def publication_from_result(query: str, result: dict) -> Publication:
    """Mapeia somente metadados públicos retornados pelo scholarly."""
    bib = result.get("bib", {})
    return Publication(
        query=query,
        title=normalize_text(bib.get("title")),
        authors=normalize_text(bib.get("author", bib.get("authors"))),
        year=normalize_text(bib.get("pub_year")),
        venue=normalize_text(bib.get("venue", bib.get("journal"))),
        abstract=normalize_text(bib.get("abstract")),
        url=normalize_text(result.get("pub_url")),
        scholar_url=normalize_text(result.get("url_scholar")),
    )


def deduplicate(publications: Iterable[Publication]) -> list[Publication]:
    """Remove duplicatas pelo DOI/URL quando disponível e, depois, pelo título."""
    unique: list[Publication] = []
    seen: set[str] = set()
    for publication in publications:
        key = (publication.url or publication.title).casefold().strip()
        if key and key not in seen:
            seen.add(key)
            unique.append(publication)
    return unique


def cache_key(query: str, limit: int) -> str:
    return hashlib.sha256(f"{query}\0{limit}".encode("utf-8")).hexdigest()


def load_cached(connection: sqlite3.Connection, key: str) -> list[Publication] | None:
    row = connection.execute(
        "SELECT payload FROM publications_cache WHERE cache_key = ?", (key,)
    ).fetchone()
    if row is None:
        return None
    return [Publication(**item) for item in json.loads(row[0])]


def save_cached(
    connection: sqlite3.Connection, key: str, publications: list[Publication]
) -> None:
    connection.execute(
        "INSERT OR REPLACE INTO publications_cache(cache_key, payload) VALUES (?, ?)",
        (key, json.dumps([asdict(item) for item in publications], ensure_ascii=False)),
    )
    connection.commit()


def open_cache(path: Path) -> sqlite3.Connection:
    path.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(path)
    connection.execute(
        "CREATE TABLE IF NOT EXISTS publications_cache ("
        "cache_key TEXT PRIMARY KEY, payload TEXT NOT NULL)"
    )
    return connection


def search_query(query: str, limit: int) -> list[Publication]:
    """Executa uma consulta; a importação tardia mantém os testes offline."""
    try:
        from scholarly import scholarly
    except ImportError as error:
        raise RuntimeError(
            "Não foi possível importar scholarly. Execute "
            "python -m pip install -r requirements.txt. "
            f"Causa original: {error}"
        ) from error

    publications: list[Publication] = []
    results = scholarly.search_pubs(query)
    for _ in range(limit):
        try:
            publications.append(publication_from_result(query, next(results)))
        except StopIteration:
            break
    return publications


def write_exports(publications: list[Publication], output_dir: Path) -> None:
    output_dir.mkdir(parents=True, exist_ok=True)
    records = [asdict(item) for item in publications]
    (output_dir / "publicacoes.json").write_text(
        json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    with (output_dir / "publicacoes.csv").open("w", newline="", encoding="utf-8-sig") as file:
        writer = csv.DictWriter(file, fieldnames=list(Publication.__annotations__))
        writer.writeheader()
        writer.writerows(records)


def parse_queries(path: Path | None) -> list[str]:
    if path is None:
        return DEFAULT_QUERIES
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, list) or not all(isinstance(item, str) for item in data):
        raise ValueError("O arquivo de consultas deve conter uma lista JSON de textos.")
    queries = [item.strip() for item in data if item.strip()]
    if not queries:
        raise ValueError("O arquivo de consultas não pode estar vazio.")
    return queries


def collect(
    queries: list[str],
    limit: int,
    delay_min: float,
    delay_max: float,
    cache_path: Path,
) -> list[Publication]:
    connection = open_cache(cache_path)
    all_publications: list[Publication] = []
    try:
        for index, query in enumerate(queries):
            key = cache_key(query, limit)
            cached = load_cached(connection, key)
            if cached is not None:
                print(f"Cache usado: {query}")
                all_publications.extend(cached)
                continue

            print(f"Consultando {index + 1}/{len(queries)}: {query}")
            try:
                publications = search_query(query, limit)
            except Exception as error:  # scholarly usa exceções variadas por versão.
                print(
                    f"Coleta interrompida em '{query}': {error}\n"
                    "Aguarde e tente novamente mais tarde; não aumente a frequência.",
                    file=sys.stderr,
                )
                break
            save_cached(connection, key, publications)
            all_publications.extend(publications)
            if index < len(queries) - 1:
                time.sleep(random.uniform(delay_min, delay_max))
    finally:
        connection.close()
    return deduplicate(all_publications)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--queries", type=Path, help="JSON com uma lista de consultas")
    parser.add_argument("--limit", type=int, default=5, help="Máximo por consulta (padrão: 5)")
    parser.add_argument("--delay-min", type=float, default=15.0, help="Espera mínima em segundos")
    parser.add_argument("--delay-max", type=float, default=30.0, help="Espera máxima em segundos")
    parser.add_argument("--cache", type=Path, default=Path("research/data/cache.sqlite3"))
    parser.add_argument("--output", type=Path, default=Path("research/data"))
    parser.add_argument("--no-cache", action="store_true", help="Desabilita leituras do cache")
    return parser


def main() -> int:
    args = build_parser().parse_args()
    if args.limit < 1 or args.delay_min < 0 or args.delay_max < args.delay_min:
        raise SystemExit("Verifique --limit e o intervalo --delay-min/--delay-max.")
    queries = parse_queries(args.queries)
    publications = collect(
        queries,
        args.limit,
        args.delay_min,
        args.delay_max,
        args.cache if not args.no_cache else Path(":memory:"),
    )
    write_exports(publications, args.output)
    print(f"{len(publications)} publicações exportadas em {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
