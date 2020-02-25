const gulp = require("gulp");
const sass = require("gulp-sass");
const minify = require("gulp-minify");
const concat = require("gulp-concat");

gulp.task("compress", () => {
  return gulp
    .src("app/js/*.js")
    .pipe(minify())
    .pipe(gulp.dest("dist/"));
});
gulp.task("sass", () => {
  return gulp
    .src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/"));
});
gulp.task("concat", () => {
  return gulp
    .src("app/js/*.js")
    .pipe(concat("concatScript.js"))
    .pipe(gulp.dest("dist/"));
});

gulp.task("watch", () => {
  gulp.watch("app/scss/*.scss", gulp.series(["sass"]));
  gulp.watch("app/js/*.js", gulp.series(["compress"]));
  gulp.watch("app/js/*.js", gulp.series(["concat"]));
});
