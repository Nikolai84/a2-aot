'use strict';

let path = require('path');

module.exports = {
  path: path.join(process.cwd(), 'dist'),
  filename: 'js/[name].bundle.js',
	chunkFilename:  '[id].chunk.js'
};
