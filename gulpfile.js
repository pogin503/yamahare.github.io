const gulp = require('gulp')
const styles = require('./tasks/styles.js')

gulp.task('dev', gulp.series(
  styles
))
