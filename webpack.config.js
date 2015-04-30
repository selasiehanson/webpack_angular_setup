'use strict';  
var webpack = require('webpack'),  
path = require('path');  

var BowerWebpackPlugin = require( 'bower-webpack-plugin' );
// PATHS
var PATHS = {  
  app: __dirname + '/app',
  bower: __dirname + '/app/bower_components'
};
module.exports = {  
  context: PATHS.app,
  entry: {
    app: ['webpack/hot/dev-server', './core/bootstrap.js']
  },
  output: {
    path: PATHS.app,
    filename: 'bundle.js'
  },
  module :{
    loaders: [
      {
        test: /\.css$/, loader: "style-loader!css-loader" 
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel!jshint',
        exclude: /node_modules|bower_components/
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=res/[name].[ext]?[hash]'
      },
      {
        test: /\.html/,
        loader: 'raw'
      },
      {
        test: /\.json/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new BowerWebpackPlugin({
      modulesDirectories: [ 'app/bower_components' ],
      manifestFiles: 'bower.json',
      searchResolveModulesDirectories: true
    })
  ]
 
};
