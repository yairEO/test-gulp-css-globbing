var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    sass            = require('gulp-sass'),
    cssGlobbing     = require('gulp-css-globbing'),
    cmq             = require('gulp-combine-media-queries'),
    autoprefixer    = require('gulp-autoprefixer');


//////////////////////
// CSS

gulp.task('scss', function () {

    gulp.src('css/main.scss')
        .pipe(cssGlobbing({ extensions:'.scss' }))
        .pipe(sass({ errLogToConsole: true })) // { style:'expanded' }
        .pipe(cmq())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./css'));

});
