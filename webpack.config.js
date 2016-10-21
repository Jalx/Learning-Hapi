var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/bin/');
var APP_DIR = path.resolve(__dirname, './src/client/app/');

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    loaders: [
        { 
          test: /\.jsx$/,
          loader: "jsx-loader"
        }
    ]   
  }
};

module.exports = config;
