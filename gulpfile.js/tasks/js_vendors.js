// Módulos
var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	concat = require('gulp-concat'),
	rename = require("gulp-rename"),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify'),
	connect = require('gulp-connect'),
	path = require('../../gulpconfig').js.vendors;

// Tarea | Copiar JS vendors
gulp.task('js_vendors', function() {
	gulp.src(path.in)
		.pipe(plumber())
		.pipe(concat('js_vendors.js'))
		.pipe(gulp.dest(path.out))
		.pipe(rename({ suffix: '.min' }))
		.pipe(uglify({
			preserveComments: 'license',
			mangle: false
		}))
		.pipe(gulp.dest(path.min))
		.pipe(connect.reload());
});