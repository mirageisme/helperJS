/**
 * Created by Shahid on 2/23/2016.
 */


var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if');


var scripts = [
    'src/Object.js',
];

gulp.task('javascript', javaScriptTask);
gulp.task('watch', watchFiles);
gulp.task('default', ['javascript', 'watch']);


/**
 *
 * @returns {*}
 */
function javaScriptTask() {
    gulp.src(scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('helper.js'))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('dist/'));

    gulp.src(scripts)
        .pipe(concat('helper.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));

    return true;
}


/**
 *
 *
 */
function watchFiles() {
    return gulp.watch(scripts, ['javascript']);
}