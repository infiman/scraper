import { staleWebsitePages } from './fetchWebsitePages';

const START_SCRAPING_WEBSITE = 'START_SCRAPING_WEBSITE';
const END_SCRAPING_WEBSITE = 'END_SCRAPING_WEBSITE';

function startScrapingWebsite(payload) {
  const { websiteUrl } = payload;

  return (dispatch, getStore) => {
    const { metadata: { href, csrfToken, csrfParam } } = getStore();

    dispatch(notifyStartScrapingWebsite(payload));

    return fetch(`${href}api/scrape_website`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfParam,
        },
        body: JSON.stringify({
          url: websiteUrl,
          [csrfToken]: csrfParam,
        })
      })
      .then(response => response.json())
      .then(json => Promise.all([
        dispatch(endScrapingWebsite(json)),
        dispatch(staleWebsitePages()),
      ]));
  }
}

function notifyStartScrapingWebsite(payload) {
  return {
    payload: Object.assign({}, payload, { isScraping: true }),
    type: START_SCRAPING_WEBSITE,
  }
}

function endScrapingWebsite(payload) {
  return {
    payload: Object.assign({}, payload, { isScraping: false }),
    type: END_SCRAPING_WEBSITE
  }
}

export {
  START_SCRAPING_WEBSITE,
  END_SCRAPING_WEBSITE,
  startScrapingWebsite,
};
