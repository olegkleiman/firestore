import express          from 'express';
import path             from 'path';
import fs               from 'fs';

import React            from 'react';
import ReactDomServer   from 'react-dom/server';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import { createStore }  from 'redux';
import { Provider }     from 'react-redux';
import admin            from 'firebase-admin';

import { match, RouterContext } from 'react-router';
import routes from './routes.jsx';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import he from 'react-intl/locale-data/he';

import localeData from './assets/messages/messages.json';

addLocaleData([...en, ...he]);

import template         from './template.js';
import reducers         from './reducers.jsx';
import App              from './js/App';

const app = express();
const PORT = process.env.PORT || 3001;

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "tlvopendata-164113",
    clientEmail: "firebase-adminsdk-r4qdi@tlvopendata-164113.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDifMuRE6bTNDSi\n5U+EHQitfhlxt4YTrIhQDuTBqG2ZIkE8I+W2c7KXqix961SEgL5x0Su1W6hNTCZE\nRkYoAyS498xwYDKkU/1m98a+qyUvZDE+r2fndiYiHtMsh7ncAmD5LNoNWviAGqjV\nJj74xjjJpJKerfRQ5Lh/nJ5ik0kUPB/WAl+Qdh17lw4yvhzKzU4ifUfPyaWmB5Vd\n/GWJAhLGhJKHrTdXt48X4sFEtQ17w9IGLlYfKASWF0DDVcJWQQ7O+iFTO/BW6nOp\nm6xV7/UAg/AF9teuILYxwVKy6WbuStr5C9eP1BQmgWF8IXivNPJ/2JtSAQFxmQjH\nz8MjAkytAgMBAAECggEAGHkGoA8BDDpMY7ume26NtP12r2B2xuJyOkBZvIlACnd2\nmBKC7FOVHSlAtHx8vfKRYYgKEocsaOnNCryTMRih27C+8PecEUCYFYu5eHnSw0uu\nvIjEj/CmzzIIfHvP+/Nv2gzcJOxLBMCctKd0z3nPwg4b37SJPUJxoyxfuuQSVfKz\nK6IRXJ3rg5cyqndBkjKrVC3eKierp833cuo+5EPIym2JSDH8j9aWTX7EbzAiajrD\nzzFQPTbzfYdG7eoKlFSS++bi7dx1MurTTxXb6wLxsiMtglMfijaI+VR4h07uNdhT\nhj74iCnWJbXjjylzUoK5hr/wu7axhb9Nz6di3LMomwKBgQD1rVmcvAD8XwWUa4yo\nkIydU2xHYOh4Hb+uvtA/gfGAzJkL+xmydL1nMLirFTBtqo+l09o6HCjn3K5QSHfH\nlUL7C4y5GrdFCcuvTWExJmupAwqwgsPjei+3pVuqUczuQVRLidRE221QRhzgKBMN\nfofwEmXLR7UDbWk7Jpl4wDLSJwKBgQDsAQeVhtBnmtD7n/kA7VVwqktRchW6wVuv\nIo319w/PHgEncmAfLvXQDeEMDAipDv8jbn8mK0LntdJD9nLiP5qrgZDXOuiDxnDE\nLsf5aO3GzwG2CCyKxpn0hYMuBIycEztOJNsJJaXRiiwZwVbK6wxWTDWTAzbIC7Za\neUbUME6zCwKBgHTgVUN1RVrKsdLcH3yJ1/t4loiWl8GdFXXCnTu5S/UkYKMMgDsf\nwoN28EOjvvhNLi2LzcPbZbJ4kAztjN5MKiNYaUgeZ5XWhSoOu/AwAQPUyJ8UdrCf\njlfluOgcJkwqlDmjhnKDmUuZL1+McRP4YB9cAUVmBb1traRQRq7lcMf9AoGBAMM2\n7tEOnOC2PNuGre/IYX46Pub12WeLfY1WpdqpLJiEFyxL/ZqNu6MHd/oBEkDVONJU\nGjS2YDdOPMke2FSxi/0FxYtjHOWzhZ+hmqSB2P00ShQKmt2H/d03exTbinunpMy0\ny8G7NHgpNOVw+ZwL5T6U91PNusiqd4JLAv2Nn+uVAoGBANLkSXy3UDVBK0MVfjPZ\n72+7oZP0weMb3aydIk0nWyOtozfHP9s3DDLX5/JE6aqdN2Z8QrhXnDXS4wSZacN1\nRB1yd/Oi5K+FWge8uOerBUp9wcn7nVpFRY1B5OUfm5Duzl4lHSi9Gg9bQ13UCipH\nNjxjM2/bnEY2URXRRHKiYPZa\n-----END PRIVATE KEY-----\n"
  }),
  databaseURL: "https://tlvopendata-164113.firebaseio.com/"
});

var db = admin.firestore();

const categories = [];
const markers = [];

console.log('Getting data from Firestore');

var p1 = db.collection('categories').get();
var p2 = db.collection('highlights').get()
Promise.all([p1,p2])
  .then( values => {

    values[0].forEach( (doc) => {
      categories.push(doc.data());
    });

    values[1].forEach( (doc) => {
      markers.push(doc.data());
    });

    app.listen(PORT, () => {
      console.log(`Server listening on: ${PORT}`);
    });

  }, reason => {
    console.error(reason);
  });

// Action creators
function initCategories(categories) {
  return {
    type: 'CATEGORIES_INIT',
    data: categories
  };
};

function initMarkers(markers) {
  return {
    type: 'MARKERS_INIT',
    data: markers
  }
};

// console.log('Reading CSS');
// let style = {};
//
// const cssPath = './assets/styles.css';
// if( fs.existsSync(cssPath) ) {
//   fs.readFile(cssPath, 'utf8', function(err, data){
//
//     style = data.toString();
//
//     if( err ) {
//       console.log('Error: ' + err);
//     } else {
//       console.log('CSS: ' + style);
//     }
//   });
// } else {
//   console.log('No CSS file found at ' + cssPath);
// }

app.get('/styles.css', (req, res) => {
  res.sendFile(__dirname + '/assets/styles.css');
});
app.use(express.static('css'));
//app.use(express.static('images'));
app.use(express.static('fonts'));
app.get('/images/city-full-banner.png', (req, res) => {
  res.sendFile(__dirname + '/images/city-full-banner.png')
});
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname + '/favicon.ico'));
});
// app.get('/fonts/BlenderRegular.oft', (req, res) => {
//   console.log('Font requested');
//   res.sendFile(path.join(__dirname + '/fonts/BlenderRegular.oft'));
// });
// app.get('/fonts/BlenderLight.oft', (req, res) => {
//   console.log('Light Font requested');
//   res.sendFile(path.join(__dirname + '/fonts/BlenderLight.oft'));
// })

app.get('*', handleRender);

function handleRender(req, res) {

  let locale = "he";

  if( req.query.lang ) { // change default locale is passed in query string
    locale = req.query.lang;
  }

  let messages = localeData[locale];

  const store = createStore(reducers);

  const _categories = categories.map( (category, index) => {

      let _category = {
        card_image: category.card_image,
        description: category.description[locale],
        name: category.name[locale],
        id: category.id
      }

      return _category;
  });

  const _markers = markers.map( (marker, index) => {

      let _marker = {
        imageUrl: marker.imageUrl,
        text: marker.text[locale],
        left: marker.left,
        left_xs: marker.left_xs,
        top: marker.top,
        top_xs: marker.top_xs
      };

      return _marker;
  });

  store.dispatch(initCategories(_categories));
  store.dispatch(initMarkers(_markers));

  const preloadedState = store.getState();
  const componentHTML = ReactDomServer.renderToString(<Provider store={store}>
                                                        <IntlProvider locale={locale} messages={messages}>
                                                          <App />
                                                        </IntlProvider>
                                                      </Provider>);
  //console.log(componentHTML);

  // res.sendFile(__dirname + '/index.html');
  const html = template({
    content: componentHTML,
    state: preloadedState,
    language: locale
  });
  res.status(200).send(html);
  //res.end(renderHTML(componentHTML, preloadedState));

};

// function handleRender(req, res) {
//
//   console.log('Handler. Url: ' + req.url);
//
//   match({ routes: routes, location: req.url }, (err, redirect, renderProps) => {
//     console.log('Match callback. Props: ' + renderProps.location.pathname + ' Redirect: ' + redirect + ' err: ' + err);
//
//     const store = createStore(reducers);
//
//     store.dispatch(initCategories(categories));
//     store.dispatch(initMarkers(highlights));
//
//     const preloadedState = store.getState();
//     // const componentHTML = ReactDomServer.renderToString(<Provider store={store}>
//     //                                                       <Router routes={routes} history={hashHistory}>
//     //                                                       </Router>
//     //                                                     </Provider>);
//     const componentHTML = ReactDomServer.renderToString(<Provider store={store}>
//                                                           <RouterContext {...renderProps} />
//                                                         </Provider>)
//     return res.end(renderHTML(componentHTML, preloadedState));
//   });
//
// };
