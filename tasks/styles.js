const gulp = require('gulp')
const sass = require('gulp-sass')
const { paths } = require('./config')

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest))
}

module.exports = styles
