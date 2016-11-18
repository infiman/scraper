import * as scraping from './scraping';
import * as fetchContent from './fetchContent';
import * as fetchWebsitePages from './fetchWebsitePages';
import * as metadata from './metadata';

export default {
  ...metadata,
  ...scraping,
  ...fetchWebsitePages,
  ...fetchContent,
};
