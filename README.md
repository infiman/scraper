SCRAPER
=======

This is Scraper API for scraping websites. It allows you to parse and to save content of h1/h2/h3 or link tags.
**In client app, for testing API, used ReactJS with Redux.**

Installation
============

* 1. Clone this repository with: `git clone <https-or-ssh-url>`
* 2. Go to project folder: `cd scraper`
* 3. Install all dependencies with: `bundle install && npm install`
* 3. Create DB: `rake db:setup`
* 5. To run application in dev environment use: `foreman start -f Procfile.dev`

Usage:
======

1. POST `/api/scrape_website` - to parse and create new resource. Request body: `scraper: { url: '<url>' }` in body.

2. GET `/api/websites/:count` - to get all already scraped websites. Use `:count` parameter to specify response size.

3. GET `/api/website/:id` - to get all contents from scraped website by id. Use `:id` parameter to specify of which website content to load.

4. GET `/` - ADDITIONAL route to get frontend application, to test API.

Requirements:
=============

* **DB:** PostgreSQL
* **Ruby:** 2.3.2
* **Ruby on Rails:** 5.0.0.1
* **NodeJS/NPM:** 6.9.1/3.10.8
* **ReactJS:** 15.0.0
* **Redux:** 3.6.0
