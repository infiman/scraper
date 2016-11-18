import actions from '../actions';

const {
  FETCH_WEBSITE_PAGES,
  RECEIVE_WEBSITE_PAGES,
  STALE_WEBSITE_PAGES,
} = actions;

function websitePages(state = {
  isFetching: false,
  isStale: false,
  error: '',
  status: '',
  entities: [],
}, {
  type,
  payload,
}) {
  switch (type) {
    case FETCH_WEBSITE_PAGES:
    case RECEIVE_WEBSITE_PAGES:
    case STALE_WEBSITE_PAGES:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}

export default websitePages;
