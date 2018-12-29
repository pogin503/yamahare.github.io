const gulp = require('gulp')
const sizereport = require('gulp-sizereport')
const { paths } = require('./config')

// ファイルのサイズ一覧を出力
function printsize () {
  return gulp.src(paths.styles.src)
    .pipe(sizereport())
}

module.exports = printsize
