module.exports = function () {
    // Обработка файлов библиотек и конкатенация в один js файл
    // $.gulp.task('scripts:lib', function() {
    //     return $.gulp.src(['src/static/libs/autosize/autosize.min.js', 'node_modules/jquery/dist/jquery.min.js'])
    //     .pipe($.gp.concat('libs.min.js'))
    //     .pipe($.gulp.dest('build/static/js/'))
    //     .pipe($.bs.reload({
    //         stream: true
    //     }));
    // });
    // Обработка файлов библиотек и перенос в build в исходном виде




    $.gulp.task('scripts', function () {
        return $.gulp.src('./src/static/js/common.js')
            .pipe($.webpackStream({
                output: {
                    filename: 'common.js',
                },
                module: {
                    rules: [
                        {
                            test: /\.(js)$/,
                            exclude: /(node_modules)/,
                            loader: 'babel-loader',
                            query: {
                                presets: [['@babel/env', {
                                    targets: "> 0.25%, not dead"
                                }]],
                            }
                        },
                        {
                            test: /\.(css)$/,
                            loader: 'css-loader'   
                        }
                    ]
                },
            }))
            .pipe($.gulp.dest('build/js/'))
            .pipe($.uglify())
            .pipe($.rename({ suffix: '.min' }))
            .pipe($.gulp.dest('build/js/'))
            .pipe($.bs.reload({
                stream: true
            }));
    });
   
}
