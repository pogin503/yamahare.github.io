const gulp = require('gulp')
const styles = require('./tasks/styles.js')
const templates = require('./tasks/templates.js')

gulp.task('dev', gulp.series(
  gulp.parallel(styles, templates)
))
