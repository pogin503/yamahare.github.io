const gulp = require('gulp')
const { paths } = require('./tasks/config')
const { reload, serve } = require('./tasks/server')
const styles = require('./tasks/styles.js')
const templates = require('./tasks/templates.js')

function watch () {
  gulp.watch(paths.styles.src, gulp.series(styles, reload))
  gulp.watch(paths.templates.src, gulp.series(templates, reload))
}

gulp.task('dev', gulp.series(
  gulp.parallel(styles, templates), serve, watch
))
