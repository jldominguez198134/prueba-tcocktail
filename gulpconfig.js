/* ----- *
 * RUTAS *
 * ----- */

 // Fichero de configuración
var data = require('gulp-data');

// Rutas | Base
var basePaths = {
	dev: 'frontend/',
	app: 'webspace/',
	tasks: '../../',
	node: 'node_modules/'
};

// Rutas | Específicas
module.exports = {
	html: {
		in: basePaths.dev + 'jade/**/!(_)*.jade',
		watch: basePaths.dev + 'jade/**/*.jade',
		out: basePaths.app
	},
	sass: {
		in: basePaths.dev + 'sass/**/*.scss',
		out: basePaths.app + 'css',
		dir: basePaths.dev + 'sass/',
		min: basePaths.app + 'css/min',
		name: 'styles.css'
	},
	bufferSass: {
		in: basePaths.dev + 'sass/buffer.scss',
		out: basePaths.app + 'css',
		dir: basePaths.dev + 'sass/',
		min: basePaths.app + 'css/min',
		name: 'buffer.css'
	},
	js: {
		in: basePaths.dev + 'js/*.js',
		out: basePaths.app + 'js',
		min: basePaths.app + 'js/min',
		vendors: {
			in: basePaths.dev + 'js/vendor/*.js',
			out: basePaths.app + 'js/vendor',
			min: basePaths.app + 'js/vendor/min'
		}
	},
	images: {
		in: basePaths.dev + 'images/**',
		out: basePaths.app + 'images/'
	},
	fonts:  {
		in: basePaths.dev + 'fonts/**',
		out: basePaths.app + 'fonts/'
	},
	server: {
		host: 'http://localhost:8080',
		browser: 'chrome',
		out: basePaths.app
	},
	htaccess: {
		in: basePaths.node + 'apache-server-configs/dist/.htaccess',
		out: basePaths.app
	},
	favicon: {
		in: basePaths.dev + 'favicon/**',
		out: basePaths.app
	}
}