const {src, dest} = require("gulp");

// Плагины
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");

// Конфигурация
const path = require("../config/path.js");
const app = require("../config/app.js");
const {webpack} = require("webpack-stream");

// Обработка JavaScript
const js = () => {
    return src(path.js.src, { sourcemaps: true })
        .pipe(plumber({
            errorHandler: notify.onError()
        }))
        .pipe(babel())
        .pipe(webpack(app.webpack))
        .pipe(uglify())
        .pipe(dest(path.js.dest, { sourcemaps: true }));
}

module.exports = js;
