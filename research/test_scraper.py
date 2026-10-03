import unittest

from scraper import Publication, deduplicate, normalize_text, publication_from_result


class ScraperHelpersTests(unittest.TestCase):
    def test_normalize_text_handles_optional_values(self):
        self.assertEqual(normalize_text(None), "")
        self.assertEqual(normalize_text(["Ana", "Bruno"]), "Ana; Bruno")
        self.assertEqual(normalize_text("  texto   acadêmico "), "texto acadêmico")

    def test_publication_mapping_uses_scholar_metadata(self):
        publication = publication_from_result(
            "consulta",
            {
                "bib": {
                    "title": "Título",
                    "author": ["Ana", "Bruno"],
                    "pub_year": 2024,
                    "abstract": "Resumo",
                },
                "pub_url": "https://example.org/paper",
            },
        )
        self.assertEqual(publication.title, "Título")
        self.assertEqual(publication.authors, "Ana; Bruno")
        self.assertEqual(publication.year, "2024")

    def test_deduplicate_prefers_url_as_identity(self):
        first = Publication("q1", "Mesmo título", "A", "2024", "V", "", "https://doi.org/x", "")
        duplicate = Publication("q2", "Outro título", "B", "2023", "V", "", "https://doi.org/x", "")
        unique = Publication("q1", "Único", "C", "2022", "V", "", "", "")
        self.assertEqual(deduplicate([first, duplicate, unique]), [first, unique])


if __name__ == "__main__":
    unittest.main()
