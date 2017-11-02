import React      from 'react';
import ReactDOM   from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers.jsx';
import App from './js/App.jsx';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Grab the state from a global variable injected into the server-generated code
const preloadedState = window.__PRELOADED_STATE__;
if( preloadedState ) {
    const categories = preloadedState.categories;
    const markers = preloadedState.markers;

    // Allow the passed state to be garbage-collected
    delete window.__PRELOADED_STATE__;

    store.dispatch({
        type: 'CATEGORIES_INIT',
        data: categories
    });
    store.dispatch({
        type: 'MARKERS_INIT',
        data: markers
    });
}

ReactDOM.hydrate(<Provider store={store}>
                  <Router history={browserHistory}>
                      <Route path='/' component={App} />
                  </Router>
                 </Provider>,
                document.getElementById('app'));
