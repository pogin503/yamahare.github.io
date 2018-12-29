const gulp = require('gulp')
const sizereport = require('gulp-sizereport')
const { paths } = require('./config')

function printsize () {
  return gulp.src(paths.styles.src)
    .pipe(sizereport())
}

module.exports = printsize
