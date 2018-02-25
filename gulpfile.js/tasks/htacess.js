// Módulos
var gulp = require('gulp'),
	path = require('../../gulpconfig').htaccess;

// Tarea | Copiar imágenes
gulp.task('htaccess', function() {
	gulp.src(path.in)
		.pipe(gulp.dest(path.out));
});