import actions from '../actions';

const {
  START_SCRAPING_WEBSITE,
  END_SCRAPING_WEBSITE,
} = actions;

function scraping(state = {
  isScraping: false,
  websiteUrl: '',
  error: '',
  status: '',
}, {
  type,
  payload
}) {
  switch (type) {
    case START_SCRAPING_WEBSITE:
    case END_SCRAPING_WEBSITE:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}

export default scraping;
