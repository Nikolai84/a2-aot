'use strict';

let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let path = require('path');

module.exports = [
	new webpack.DefinePlugin({
		// Environment helpers
		'API_URL': JSON.stringify('http://some_url')
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

  new CopyWebpackPlugin([
		{ from: 'index.html' },
		{ from: 'favicon.ico' },
	  // Copy assets from the public folder
	  // Reference: https://github.com/kevlened/copy-webpack-plugin
    { from: 'public', to: 'public' }
	]),
  new ExtractTextPlugin('style.bundle.css')
];

// Helper functions
function root(args) {
	args = Array.prototype.slice.call(arguments, 0);
	return path.join.apply(path, [__dirname].concat(args));
}