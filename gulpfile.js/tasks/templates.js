// Módulos
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	data = require('gulp-data'),
	jade = require('gulp-jade'),
	prettify = require('gulp-prettify'),
	connect = require('gulp-connect'),
	rename = require("gulp-rename"),
	pathRoot = require('../../gulpconfig'),
	path = require('../../gulpconfig').html;

// Tarea | Crear templates HTML
gulp.task('jade', function() {
	return gulp.src(path.in)
		.pipe(plumber())
		.pipe(jade())
		.pipe(prettify({indent_size: 4}))
		.pipe(gulp.dest(path.out))
		.pipe(connect.reload());
});

// Tarea | Gestión de ficheros HTML
gulp.task('templates', ['jade']);