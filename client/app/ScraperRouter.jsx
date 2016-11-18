import React from 'react';
import { Router, Route } from 'react-router';

import Main from './screens/Main';
import Website from './screens/Website';

const ScraperRouter = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={Main} />
      <Route path="website/:id" component={Website} />
    </Router>
  )
};
ScraperRouter.propTypes = {
  history: React.PropTypes.object.isRequired,
};

export default ScraperRouter;
