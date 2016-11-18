import fetch from 'isomorphic-fetch';

const FETCH_WEBSITE_PAGES = 'FETCH_WEBSITE_PAGES';
const RECEIVE_WEBSITE_PAGES = 'RECEIVE_WEBSITE_PAGES';
const STALE_WEBSITE_PAGES = 'STALE_WEBSITE_PAGES';

function fetchWebsitePages(payload) {
  return (dispatch, getStore) => {
    const { metadata: { href } } = getStore();

    dispatch(notifyFetchWebsitePages(payload));

    return fetch(`${href}api/websites/${payload.count}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWebsitePages(json)));
  };
}

function notifyFetchWebsitePages(payload) {
  return {
    payload: Object.assign({}, payload, { isStale: false, isFetching: true }),
    type: FETCH_WEBSITE_PAGES,
  }
}

function receiveWebsitePages(payload) {
  return {
    payload: Object.assign({}, payload, { isFetching: false }),
    type: RECEIVE_WEBSITE_PAGES,
  }
}

function staleWebsitePages(payload = {
  isStale: true,
}) {
  return {
    payload,
    type: STALE_WEBSITE_PAGES,
  }
}

export {
  FETCH_WEBSITE_PAGES,
  RECEIVE_WEBSITE_PAGES,
  STALE_WEBSITE_PAGES,
  fetchWebsitePages,
  staleWebsitePages,
};
