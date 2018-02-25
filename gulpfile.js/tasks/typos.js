// Módulos
var gulp = require('gulp'),
	path = require('../../gulpconfig').fonts;

// Tarea | Copiar tipografías
gulp.task('typos', function() {
	gulp.src(path.in)
	.pipe(gulp.dest(path.out));
});