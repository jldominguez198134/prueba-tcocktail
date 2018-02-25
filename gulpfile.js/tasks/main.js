// Módulos
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	path = require('../../gulpconfig');

// Tarea | Lanza la aplicación y con sus tareas
gulp.task('default', ['typos', 'images', 'js_vendors', 'templates', 'styles', 'buffer', 'scripts', 'favicon', 'connect', 'open'], function() {
	gulp.watch(path.html.watch, ['templates']);
	gulp.watch(path.sass.in, ['styles']);
	gulp.watch(path.sass.in, ['buffer']);
	gulp.watch(path.js.in, ['scripts']);
});