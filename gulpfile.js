var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['watch']);

gulp.task('sass', function () {
 return gulp.src('./src/sass/style.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
