import re
import unittest
from pathlib import Path


class InvitationImagesTest(unittest.TestCase):
    def test_uploaded_images_are_local_and_present(self):
        pages = list(Path('chungdoi.com/i').glob('hongminh-khanhlinh*.html'))
        self.assertTrue(pages)
        for page in pages:
            content = page.read_text()
            self.assertNotIn('https://cdn.chungdoi.com/uploads/', content, str(page))
            urls = re.findall(r'(/cdn\.chungdoi\.com/uploads/[\w-]+\.jpg)', content)
            self.assertTrue(urls, str(page))
            for url in urls:
                self.assertTrue(Path(url.lstrip('/')).is_file(), url)


if __name__ == '__main__':
    unittest.main()
