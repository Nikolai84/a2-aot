'use strict';

let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let HtmlWebpackPlugin = require('html-webpack-plugin');


let path = require('path');
let ENV = process.env.npm_lifecycle_event;
let envMap =
	{
		'start': {
				API_URL: 'http://dev.url'
    },
		'build-prod': {
			API_URL: 'http://prod.url'
		},
		'build-stage': {
			API_URL: 'http://stage.url'
		},
		'build': {
			API_URL: 'http://prod.url'
		}
};
const ENV_CONFIG = envMap[ENV] || envMap['start'];
console.log(path.join(process.cwd(), 'src', 'public'));
module.exports = [
	new webpack.DefinePlugin({
		// Environment helpers
		'API_URL': JSON.stringify(ENV_CONFIG.API_URL)
	}),
  new webpack.ProgressPlugin(),
  new webpack.ContextReplacementPlugin(
    // The (\\|\/) piece accounts for path separators in *nix and Windows
    /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    path.join(process.cwd(), 'src')
  ),
	// new webpack.optimize.UglifyJsPlugin({ compress: {
	// 	screw_ie8: true,
	// 	warnings: false,
	// 	conditionals: true,
	// 	unused: true,
	// 	comparisons: true,
	// 	sequences: true,
	// 	dead_code: true,
	// 	evaluate: true,
	// 	if_return: true,
	// 	join_vars: true,
	// 	negate_iife: false // we need this for lazy v8
	// }, sourceMap: true, mangle: { keep_fnames: true }}),
	// new CommonsChunkPlugin({
	// 	name: ['vendor', 'polyfills']
	// }),

	// Inject script and link tags into html files
	// Reference: https://github.com/ampedandwired/html-webpack-plugin
	new HtmlWebpackPlugin({
		template: './public/index.html',
		chunksSortMode:  function (a, b) {  //alphabetical order - reverse
			if (a.names[0] < b.names[0]) {
				return 1;
			}
			if (a.names[0] > b.names[0]) {
				return -1;
			}
			return 0;
		}
	}),

	new ExtractTextPlugin({filename: 'css/[name].[hash].css', disable: false}), // disable if is prod

  new CopyWebpackPlugin([{
	  // Copy assets from the public folder
	  // Reference: https://github.com/kevlened/copy-webpack-plugin
	  from: path.join(process.cwd(), 'src', 'public')
  }
	])
];
