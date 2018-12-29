const gulp = require('gulp')
const pug = require('gulp-pug')
const { paths } = require('./config')

// pugをhtmlにコンパイル
function templates() {
  return gulp.src(paths.templates.src)
    .pipe(pug({ pretty:false }))
    .pipe(gulp.dest(paths.templates.dest))
}

module.exports = templates
