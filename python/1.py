# sync_scrape.py (needs Python 3.7+)
import time, re, requests

def fetch_url(url):
    t = time.perf_counter()
    html = requests.get(url).text
    print(f"time of fetch_url({url}): {time.perf_counter() - t:.2f}s")
    return html

def scrape_data(html):
    return re.findall(r'href="([^"]*)"', html)

urls = [
    "https://www.ietf.org/rfc/rfc2616.txt",
    "https://en.wikipedia.org/wiki/Asynchronous_I/O",
]
extracted_data = {}

t = time.perf_counter()
for url in urls:
    html = fetch_url(url)
    extracted_data[url] = scrape_data(html)

print("> extracted data:", extracted_data)
print(f"time elapsed: {time.perf_counter() - t:.2f}s")
