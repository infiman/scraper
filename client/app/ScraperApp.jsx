import React from 'react';
import ReactOnRails from 'react-on-rails';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './shared/store';
import actions from './shared/actions';
import ScraperRouter from './ScraperRouter';

const history = syncHistoryWithStore(browserHistory, store);

const ScraperApp = (props, railsContext) => {
  store.dispatch(actions.setMetadata({ ...props.csrf, ...railsContext }));

  return (
    <Provider store={store}>
      <ScraperRouter history={history} />
    </Provider>
  );
};
ScraperApp.propTypes = {
  csrf: React.PropTypes.object.isRequired,
};

ReactOnRails.register({ ScraperApp });
