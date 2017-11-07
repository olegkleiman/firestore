import React      from 'react';
import ReactDOM   from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers.jsx';

import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import he from 'react-intl/locale-data/he';

import localeData from './assets/messages/messages.json';

// Detect locale as an attribute passed to <script> tag
const scriptElement = document.getElementById('bundle');
const locale = scriptElement.getAttribute('lang');

const messages = localeData[locale];
addLocaleData([...en, ...he]);

import App from './js/App.jsx';

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Grab the state from a global variable injected into the server-generated code
const preloadedState = window.__PRELOADED_STATE__;
if( preloadedState ) {
    const categories = preloadedState.categories;
    const markers = preloadedState.markers;
    const promotions = preloadedState.promotions;

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
    store.dispatch({
        type: 'PROMOTIONS_INIT',
        data: promotions
    });
}

ReactDOM.hydrate(<Provider store={store}>
                    <IntlProvider locale={locale} messages={messages}>
                      <Router history={browserHistory}>
                          <Route path='/' component={App} />
                      </Router>
                    </IntlProvider>
                 </Provider>,
                document.getElementById('app'));
