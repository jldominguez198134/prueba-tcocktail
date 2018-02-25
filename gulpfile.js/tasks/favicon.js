// Módulos
var gulp = require('gulp'),
	path = require('../../gulpconfig').favicon;

// Tarea | Copiar imágenes
gulp.task('favicon', function() {
	gulp.src(path.in)
		.pipe(gulp.dest(path.out));
});