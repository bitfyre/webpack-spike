var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'source/js/app.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.js$/,
        loader: '6to5-loader'
      }
    ]
  },
  resolve: {
    modulesDirectories: [
      'node_modules'
    ]
  }
};

