const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeimage(){
    return gulp.src('./img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/img'))
}

function compilaJavascript(){
    return gulp.src('./js/scrips.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
}

function compilaSass(){
    return gulp.src('./sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/styles'));
}

exports.default = function(){
    gulp.watch('./sass/*', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./js/*', {ignoreInitial: false}, gulp.series(compilaJavascript));
    gulp.watch('./img/*', {ignoreInitial: false}, gulp.series(comprimeimage));
}

