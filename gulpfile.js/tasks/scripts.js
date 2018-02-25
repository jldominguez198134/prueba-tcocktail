// Módulos
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat'),
	rename = require("gulp-rename"),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect'),
	path = require('../../gulpconfig');
	
// Tarea | Concatena ficheros JS
gulp.task('scripts', function() {
	return gulp.src(path.js.in)
		.pipe(plumber())
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest(path.js.out))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify({
			preserveComments: 'license',
			mangle: false
		}))
		.pipe(gulp.dest(path.js.min))
		.pipe(connect.reload());
});