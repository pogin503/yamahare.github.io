const gulp = require('gulp')
const rev = require('gulp-rev');
const { paths } = require('./config')
// postcssのプラグイン

function add_hash () {
  return gulp.src(paths.manifest.src)
    .pipe(rev()) // Rename all files except index.html
    .pipe(gulp.dest(paths.manifest.dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest(paths.manifest.dest));
}

module.exports = add_hash
