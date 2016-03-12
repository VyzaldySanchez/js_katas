'use strict';

let gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('test:mocha', () => {
    return gulp.src(['tests/**/test*.js', 'src/**/**.js'], {
        read: false
    }).pipe(mocha({
            reporter: 'spec',
            growl: true
        }));
});

gulp.task('watch', () => {
    return gulp.watch(['tests/**/test*.js', 'src/**/**.js'], ['test:mocha']);
});

gulp.task('default', ['test:mocha', 'watch']);
