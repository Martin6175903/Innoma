// const {src, dest} = require("gulp");
//
// // Плагины
// const gp = require("gulp-load-plugins")();              // Плагин держит все плагины GULP в себе, которые содержатся в package.json и в любой момент можно их вызвать.
// // const plumber = require("gulp-plumber");
// // const notify = require("gulp-notify");
// // const pugs = require("gulp-pug");
// // const webpHtml = require("gulp-webp-html");
//
// // Конфигурация
// const path = require("../config/path.js");
// const app = require("../config/app.js");

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

