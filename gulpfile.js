const gulp = require("gulp");
const sass = require("gulp-sass");
const watch = require("gulp-watch");

gulp.task("sass", () => {
  return gulp
    .src("app/scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/"));
});

gulp.task("watch", () => {
  gulp.watch("app/scss/*.scss", gulp.series(["sass"]));
});
