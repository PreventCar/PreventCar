# Pesquisa acadêmica

Este utilitário coleta **metadados públicos** do Google Scholar para apoiar a Introdução, a Justificativa e o comparativo de trabalhos do PreventCar. Ele não baixa texto integral, não automatiza citações e não tenta contornar CAPTCHA, bloqueios, limites ou controles de acesso.

## Preparação

Na raiz do projeto:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
```

Se o PowerShell impedir a ativação, execute o script com o interpretador do ambiente diretamente:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

## Uso prudente

Faça uma execução pequena primeiro. O intervalo padrão é de 15 a 30 segundos entre consultas e os resultados são guardados em `research/data/cache.sqlite3` para evitar repetir requisições.

```powershell
python research\scraper.py --queries research\queries.json --limit 5
```

Os arquivos `research/data/publicacoes.csv` e `research/data/publicacoes.json` podem ser abertos para triagem. Para uma nova coleta, prefira alterar as consultas ou aguardar; use `--no-cache` somente quando houver uma razão clara.

Parâmetros úteis:

- `--limit 3`: reduz a quantidade de resultados por consulta.
- `--delay-min 30 --delay-max 60`: aumenta a espera entre consultas.
- `--output research\data\rodada-01`: salva uma rodada em outra pasta.
- `--cache research\data\cache.sqlite3`: reutiliza o cache padrão.

Se aparecer CAPTCHA, `429`, erro de acesso ou resposta inesperada, pare a execução e tente novamente em outro momento. Não use proxy, rotação de IP, múltiplas contas ou automação de desafios. Verifique também as condições de uso do Google Scholar e da instituição antes de executar uma coleta maior.

## Como transformar a coleta em material acadêmico

1. Remova duplicatas e leia o resumo e o texto original de cada candidato.
2. Confirme autores, ano, periódico/evento, DOI e URL na página da publicação ou no portal da biblioteca.
3. Separe os trabalhos por eixo: manutenção preventiva/preditiva, gestão de frotas, alertas em aplicativos e segurança viária.
4. Para o comparativo, registre objetivo, público-alvo, dados de entrada, método, saída, limitações e relação com o PreventCar. O CSV é um ponto de partida, não uma avaliação automática de similaridade.
5. Use as palavras-chave dos trabalhos selecionados e acrescente termos do domínio, por exemplo: `manutenção preventiva`, `manutenção preditiva`, `gestão de frotas`, `segurança viária`, `alertas de manutenção`, `durabilidade de peças`, `sistema de apoio à decisão`, `vehicle maintenance` e `fleet management`.
6. Não use um resultado como evidência sem leitura e conferência da fonte. Registre a data de acesso na versão final do trabalho.

## Limitações

`scholarly` depende da interface pública do Google Scholar e pode deixar de funcionar após mudanças no provedor. A ferramenta foi mantida deliberadamente simples para pesquisa exploratória e não substitui bases institucionais, SciELO, Portal de Periódicos CAPES ou IEEE Xplore quando houver acesso.
