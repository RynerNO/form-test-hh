'use strict';

/* Plugins
********************
gulp-load-plugins
gulp-pug
gulp-sass
gulp-csso
gulp-notify
gulp-autoprefixer
gulp-sourcemaps
gulp-browserSync
gulp-concat

*/

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    rename: require('gulp-rename'),
    uglify: require('gulp-uglify'),
    webpack: require('webpack'),
    webpackStream: require('webpack-stream'),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug', 'sass', 'scripts', 'img', 'fonts', 'svg'),
    $.gulp.parallel('watch', 'serve')
));

//$.gulp.task('build', $.gulp.series(
    //$.gulp.parallel('pug', 'sass', 'scripts:lib',  'scripts:webp', 'scripts:page', 'scripts', 'img', 'fonts', 'svg')
//));
