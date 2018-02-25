// Módulos
var gulp = require('gulp')
	open = require('gulp-open'),
	path = require('../../gulpconfig').server;

// Tarea | Abrir navegador
gulp.task('open', function(){
	var options = {
		uri: path.host,
		app: path.browser
	};
	gulp.src(__filename)
	.pipe(open(options));
});