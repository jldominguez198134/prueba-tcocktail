// Módulos
var gulp = require('gulp'),
	connect = require('gulp-connect'),
	path = require('../../gulpconfig').server;

// Tarea | Connect
gulp.task('connect', function() {
	connect.server({
		root: path.out,
		port: 8080,
		livereload: true
	});
});