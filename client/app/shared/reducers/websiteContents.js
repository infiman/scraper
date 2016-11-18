import actions from '../actions';

const {
  FETCH_WEBSITE_CONTENT,
  RECEIVE_WEBSITE_CONTENT,
} = actions;

function websiteContents(state = {
  isFetching: false,
  error: '',
  entities: [],
}, {
  type,
  payload,
}) {
  switch (type) {
    case FETCH_WEBSITE_CONTENT:
    case RECEIVE_WEBSITE_CONTENT:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}

export default websiteContents;
