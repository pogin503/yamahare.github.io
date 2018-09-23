const gulp = require('gulp')
const { paths } = require('./tasks/config')
const { reload, serve } = require('./tasks/server')
const styles = require('./tasks/styles.js')
const templates = require('./tasks/templates.js')

function watch () {
  gulp.watch(paths.styles.src, gulp.series(styles, reload))
  gulp.watch(paths.templates.src, gulp.series(templates, reload))
}

// 開発用
gulp.task('dev', gulp.series(
  gulp.parallel(styles, templates), serve, watch
))

// 本番用
gulp.task('build', gulp.series(
  gulp.parallel(styles, templates)
))
