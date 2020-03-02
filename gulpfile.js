var gulp = require("gulp");
var sass = require("gulp-sass");
var minify = require("gulp-minify");
var uglify = require("gulp-uglify-es").default;
var rename = require("gulp-rename");
var concat = require("gulp-concat");

gulp.task("uglify", () => {
  return gulp
    .src("dist/concatScript.js")
    .pipe(rename("concatScript.min.js"))
    .pipe(uglify())
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
  gulp.watch("app/js/*.js", gulp.series(["concat"]));
  gulp.watch("dist/concatScript.js", gulp.series(["uglify"]));
});
