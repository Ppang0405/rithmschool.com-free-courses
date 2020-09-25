/*


WTF this module?

By the end of this chapter, you should be able to:

    Define what web scraping is
    Use cheerio to scrape data from a website


 */

/*


1. Web Scraping

Web scraping is the process of downloading and extracting data from a website. There are 3 main steps in scraping:

    Downloading the HTML document from a website (we will be doing this with the request module)
    Extracting data from the downloaded HTML (we will be doing this with cheerio)
    Doing something with the data (usually saving it somehow, e.g. by writing to a file with fs or saving to a database)

Typically, you would want to access the data using a website's API, but often websites don't provide this programmatic access. When a website doesn't provide a programmatic way to download data, web scraping is a great way to solve the problem!



2. Robots.txt

Before you begin web scraping, it is a best practice to understand and honor a site's robots.txt file. The file may exist on any website that you visit and its role is to tell programs (like our web scraper) about rules on what it should and should not download on the site. Here is Rithm School's robots.txt file. As you can see, it doesn't provide any restrictions. Compare that file to Craigslist's robots.txt file which is much more restrictive on what can be downloaded by a program.






 */