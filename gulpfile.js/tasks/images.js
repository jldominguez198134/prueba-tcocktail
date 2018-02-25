// Módulos
var gulp = require('gulp'),
	path = require('../../gulpconfig').images,
	imagemin = require('gulp-imagemin');

// Tarea | Copiar imágenes
gulp.task('images', function() {
	gulp.src(path.in)
		.pipe(imagemin())
		.pipe(gulp.dest(path.out));
});