const gulp = require('gulp')
const clean = require('./tasks/clean')
const styles = require('./tasks/styles')
const templates = require('./tasks/templates')
const scripts = require('./tasks/scripts')
const { paths } = require('./tasks/config')
const { reload, serve } = require('./tasks/server')

function watch () {
  gulp.watch(paths.styles.src, gulp.series(styles, reload))
  gulp.watch(paths.templates.src, gulp.series(templates, reload))
  gulp.watch(paths.scripts.watch, gulp.series(scripts, reload))
}

// 開発用
gulp.task('dev', gulp.series(
  clean, gulp.parallel(styles, templates, scripts), serve, watch
))

// 本番用
gulp.task('build', gulp.series(
  clean, gulp.parallel(styles, templates, scripts)
))