require('babel-core/register');
['.css', '.oft', '.ttf', '.woff', '.woff2'].forEach( (ext) => require.extensions[ext] = () => {} );
require('babel-polyfill');
require('./server.js');
