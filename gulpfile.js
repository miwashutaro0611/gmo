var gulp = require("gulp");
var sass = require("gulp-stylus");
var plumber = require("gulp-plumber");
var browserSync = require("browser-sync");
var notify = require("gulp-notify");
var pug = require("gulp-pug");

gulp.task('default', ['sass', 'browser-sync', 'pug', 'watch']);

//sassとpugの監視をして変換処理させる
gulp.task('watch', () => {
    gulp.watch(['./src/_sass/**'], () => {
        gulp.start(['sass']);
    });
    gulp.watch(['./src/_pug/**'], () => {
        gulp.start(['pug']);
    });
});

//ブラウザ表示
gulp.task('browser-sync', () => {
    browserSync({
        server: {
            baseDir: "./html/"   //サーバとなるrootディレクトリ
        }
    });
    //ファイルの監視
    //以下のファイルが変わったらリロードする
    gulp.watch("./*/*.js",     ['reload']);
    gulp.watch("./*/*.html",         ['reload']);
    gulp.watch("./*/*.css",         ['reload']);
    gulp.watch("./*/*.pug",         ['reload']);
    gulp.watch("./*/*.styl",         ['reload']);
    // gulp.watch("./*/*.scss",         ['reload']);
});

//sassをcssに変換
gulp.task("sass", () => {
    gulp.src("./src/_sass/**/*.styl")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
        //reloadせずにinjectする
        .pipe(browserSync.stream())
});

//pugをhtmlに変換
gulp.task("pug", () => {
    var option = {
        pretty: true
    }
    gulp.src("./src/_pug/*.pug")
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        .pipe(pug(option))
        .pipe(gulp.dest("./html/"))
});

//ブラウザリロード処理
gulp.task('reload', () => {
    browserSync.reload();
});
