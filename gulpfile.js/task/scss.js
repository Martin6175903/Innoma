// Обработка CSS
const scss = () => {
    return $.gulp.src($.path.scss.src, { sourcemaps: $.app.isDev })
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError()
        }))
        .pipe($.gp.sassGlob())
        .pipe($.sass())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer())
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({ title: "main.css"} ))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
        .pipe($.gp.rename({ suffix: ".min" }))
        .pipe($.gp.csso())
        .pipe($.gp.size({ title: "main.min.css"} ))
        .pipe($.gulp.dest($.path.scss.dest, { sourcemaps: $.app.isDev }))
        .pipe($.browsersync.stream());
}

module.exports = scss;
