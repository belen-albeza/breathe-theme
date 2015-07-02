var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('less', function () {
  return gulp.src(['assets/less/*.less', '!assets/less/_*.less'])
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', ['less'], function () {
    gulp.watch('assets/less/*.less', ['less']);
});

gulp.task('default', ['less']);
