import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import metadata from './metadata';
import scraping from './scraping';
import websitePages from './websitePages';
import websiteContents from './websiteContents';

export default combineReducers({
  metadata,
  scraping,
  websitePages,
  websiteContents,
  routing,
});
