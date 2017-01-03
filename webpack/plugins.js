'use strict';

let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
let HtmlWebpackPlugin = require('html-webpack-plugin');
let autoprefixer = require('autoprefixer');
let PostcssAssetsPlugin = require('postcss-assets-webpack-plugin');
let CompressionPlugin = require("compression-webpack-plugin");
let csswring = require('csswring');
let path = require('path');
const {ENV_CONFIG, notDevEnv, isStage, isDev, isProd} = require('./env-vars');
console.log('notDevEnv', notDevEnv);
console.log('isDev', isDev);
console.log('ENV_CONFIG', ENV_CONFIG);

const plugins = [];

plugins.push(
	new webpack.DefinePlugin({
		// Environment helpers
		'API_URL': JSON.stringify(ENV_CONFIG.API_URL),
		'process.env': {
			ENV: JSON.stringify(ENV_CONFIG.ENV)
		}
	}),
	new webpack.ProgressPlugin(),
	new webpack.ContextReplacementPlugin(
		// The (\\|\/) piece accounts for path separators in *nix and Windows
		/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
		path.join(process.cwd(), 'src')
	),
	new webpack.LoaderOptionsPlugin({
		options: {
			/**
			 * Apply the tslint loader as pre/postLoader
			 * Reference: https://github.com/wbuchwalter/tslint-loader
			 */
			tslint: {
				emitErrors: true,
				failOnHint: false
			},
			/**
			 * Sass
			 * Reference: https://github.com/jtangelder/sass-loader
			 * Transforms .scss files to .css
			 */
			sassLoader: {
				//includePaths: [path.resolve(__dirname, "node_modules/foundation-sites/scss")]
			},
			/**
			 * PostCSS
			 * Reference: https://github.com/postcss/autoprefixer-core
			 * Add vendor prefixes to your css
			 */
			postcss: [
				autoprefixer({
					browsers: ['last 2 version']
				})
			]
		}
	}),
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
	new ExtractTextPlugin({filename: 'css/[name].[hash].css', disable: !notDevEnv})// disable if not prod
);

if (notDevEnv) {
	plugins.push(
		new webpack.optimize.UglifyJsPlugin(
			{
				output: {
					comments: false
				},
				compress: {
					screw_ie8: true,
					drop_console: isProd,
					warnings: false,
					conditionals: true,
					unused: true,
					comparisons: true,
					sequences: true,
					dead_code: true,
					evaluate: true,
					if_return: true,
					join_vars: true,
					negate_iife: false // we need this for lazy v8
				}, sourceMap: true, mangle: { keep_fnames: true }}
		),
	new CopyWebpackPlugin([{
		// Copy assets from the public folder
		// Reference: https://github.com/kevlened/copy-webpack-plugin
		from: path.join(process.cwd(), 'src', 'public')
	}
	]),
	new PostcssAssetsPlugin({
		test: /\.css$/,
		log: true,
		plugins: [
			// Minify CSS file with source maps. That’s only
			csswring({preservehacks: true, removeallcomments: true})
		]
	}),
	new CompressionPlugin({
		asset: "[path].gz[query]",
		algorithm: "gzip",
		test: /\.js$|\.html$/,
		threshold: 10240,
		minRatio: 0.8
	})
	);
}

module.exports = plugins;
