'use strict';

let gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('mocha-test', function() {
    return gulp.src(['tests/**/test*.js'], {
        read: false
    }).pipe(mocha({
        reporter: 'spec',
        growl: true
    }));
});

gulp.task('watch', function() {
    return gulp.watch(['tests/**/test*.js', 'src/**/**.js'], ['mocha-test']);
});

gulp.task('default', ['mocha-test', 'watch']);
