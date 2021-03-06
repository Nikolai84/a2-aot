import rollup      from 'rollup'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
	entry: 'aot/src/app/main.aot.js',
	dest: 'dist/build.js', // output a single application bundle
	sourceMap: false,
	format: 'iife',
	// external: ['moment-timezone'],
	plugins: [
		nodeResolve({jsnext: true, module: true}),
		commonjs({
			include: [
				'node_modules/rxjs/**',
				'node_modules/moment-timezone/**',
				'node_modules/lodash/**'
			],
			namedExports: {
				// left-hand side can be an absolute path, a path
				// relative to the current directory, or the name
				// of a module in node_modules
				// 'lodash': [ 'startsWith', 'camelCase', 'isArray', 'snakeCase', 'isObject' ]
			},
		}),
		uglify()
	]
}