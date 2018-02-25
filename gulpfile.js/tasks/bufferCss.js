// Módulos
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	sass = require('gulp-sass'),
	rename = require("gulp-rename"),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	connect = require('gulp-connect'),
	path = require('../../gulpconfig').bufferSass;

// Tarea | Compilar estilos CSS
gulp.task('buffer', function () {
	return gulp.src(path.in)
		.pipe(plumber())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(rename(path.name))
		.pipe(gulp.dest(path.out))
		.pipe(rename({ suffix: '.min' }))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest(path.min))
		.pipe(connect.reload());
});