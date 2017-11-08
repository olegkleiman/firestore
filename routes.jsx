import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './js/App.jsx';
import DefaultLayout from './js/DefaultLayout.jsx';
import Dataset from './js/Dataset.jsx';

module.exports = (
  <Route path='/' component={App}>
      <IndexRoute component={DefaultLayout} />
      <Route path='/ds/:id' component={Dataset} />
  </Route>
)
