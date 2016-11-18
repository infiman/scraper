import fetch from 'isomorphic-fetch';

const FETCH_WEBSITE_CONTENT = 'FETCH_WEBSITE_CONTENT';
const RECEIVE_WEBSITE_CONTENT = 'RECEIVE_WEBSITE_CONTENT';

function fetchWebsiteContent(payload) {
  return (dispatch, getStore) => {
    const { metadata: { href } } = getStore();

    dispatch(notifyFetchWebsiteContentData(payload));

    return fetch(`${href}api/website/${payload.id}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWebsiteContentData(json)));
  };
}

function notifyFetchWebsiteContentData(payload) {
  return {
    payload: Object.assign({}, payload, { isFetching: true }),
    type: FETCH_WEBSITE_CONTENT,
  }
}

function receiveWebsiteContentData(payload) {
  return {
    payload: Object.assign({}, payload, { isFetching: false }),
    type: RECEIVE_WEBSITE_CONTENT,
  }
}

export {
  FETCH_WEBSITE_CONTENT,
  RECEIVE_WEBSITE_CONTENT,
  fetchWebsiteContent,
};
