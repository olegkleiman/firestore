var path = require('path');

var cssName = process.env.NODE_ENV === 'production' ? 'styles-[hash].css' : 'styles.css';

var jsName = 'bundle.js';

var BUILD_DIR = path.resolve(__dirname, 'assets');

var config = {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, 'client.jsx')
  ],
  output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
  },
  resolve: {
      extensions: ['.js', '.jsx', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
             options: {
               modules: true,
               importLoaders: 1,
               localIdentName: '[name]__[local]___[hash:base64:5]'
             }
          }
        ],
        exclude: /node_modules/
      },
      { test: /\.(woff|woff2|ttt|eot|otf)/, loader: 'url-loader?limit=1' },
      { test: /\.png/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=svg+xml' }
    ]
  },
  devServer: {
      headers: { 'Access-Control-Origin': '*'}
  }

};

module.exports = config;
