
// Обработка PUG
const pug = () => {
    return $.gulp.src($.path.pug.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        .pipe($.gp.pug($.app.pug))
        .pipe($.gp.webpHtml())
        .pipe($.gulp.dest($.path.pug.dest))
        .pipe($.browsersync.stream());
}

module.exports = pug;

