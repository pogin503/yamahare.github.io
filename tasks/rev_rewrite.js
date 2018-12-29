const gulp = require('gulp')
const revRewrite = require('gulp-rev-rewrite');
const { paths } = require('./config')

// htmlファイルの各URL指定をhashつきに置き換える
function change_hash_of_html_link () {

  const manifest = gulp.src(`${paths.manifest.dest}rev-manifest.json`)

  return gulp.src(`${paths.templates.dest}*.html`)
    .pipe(revRewrite({ manifest }))
    .pipe(gulp.dest(paths.templates.dest))
}

module.exports = change_hash_of_html_link
