
// Обработка Fonts
const fonts = () => {
    return $.gulp.src($.path.fonts.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        .pipe($.gp.newer($.path.fonts.dest))
        .pipe($.gp.fonter($.app.fonter))
        .pipe($.gulp.dest($.path.fonts.dest))
        .pipe($.gp.ttf2woff2())
        .pipe($.gulp.dest($.path.fonts.dest))
        .pipe($.browsersync.stream());
}

module.exports = fonts;
