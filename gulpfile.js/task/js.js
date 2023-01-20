// Обработка JavaScript
const js = () => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        .pipe($.gp.babel())
        .pipe($.webpack($.app.webpack))
        // .pipe(uglify()) не нужен так как используем webpack
        .pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
        .pipe($.browsersync.stream());
}

module.exports = js;
