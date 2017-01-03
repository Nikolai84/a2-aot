'use strict';

let path = require('path');
const {ENV_CONFIG, notDevEnv, isStage, isDev, isProd} = require('./env-vars');


module.exports = {
  path: path.join(process.cwd(), 'dist'),
  filename: isProd ? 'js/[name].[hash].bundle.js' : 'js/[name].bundle.js',
	chunkFilename:  isProd ? '[id].[hash].chunk.js' : '[id].chunk.js'
};
