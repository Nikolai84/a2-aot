'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
console.log('path!!',  path.resolve(process.cwd(), 'src', 'app'));

module.exports = {
  rules: [
    {
      test: /\.ts$/,
      use: ['awesome-typescript-loader', 'angular2-template-loader']
    },
    {
      test: /\.html$/,
      use: 'raw-loader'
    },
	  {
		  test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		  loader: 'file-loader?name=fonts/[name].[hash].[ext]?'
	  },
    {
      test: /\.css$/,
      include: path.resolve(process.cwd(), 'src', 'app'),
      loaders: ['to-string-loader', 'css-loader']
    },
	  // Support for *.json files.
	  {test: /\.json$/, loader: 'json-loader'},
    {
      test: /\.css$/,
      exclude: path.resolve(process.cwd(), 'src', 'app'),
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader'
      })
    },
	  {
		  test: /\.(scss|sass)$/,
		  exclude: path.resolve(process.cwd(), 'src', 'app'),
		  loader:  ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: ['css-loader', 'postcss-loader', 'sass-loader']})
	  },

	  // // all css required in src/app files will be merged in js files
	  // @TODO postcss loader to minify css in js files
	  {test: /\.(scss|sass)$/, exclude: path.resolve(process.cwd(), 'src', 'style'), loader: 'raw-loader!postcss-loader!sass-loader'}

  ]
};
