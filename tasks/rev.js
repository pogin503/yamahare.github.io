const gulp = require('gulp')
const rev = require('gulp-rev');
const revdel = require('gulp-rev-delete-original');
const filter = require('gulp-filter');
const { paths } = require('./config')

function add_hash () {
  const excepHtml = filter(['**/*', '!**/index.html'], {restore: true});

  return gulp.src(paths.manifest.src)
    .pipe(excepHtml)
    .pipe(rev())         // Rename all files except index.html
    .pipe(revdel())
    .pipe(excepHtml.restore)
    .pipe(gulp.dest(paths.manifest.dest))
    .pipe(rev.manifest())
    .pipe(gulp.dest(paths.manifest.dest));
}

module.exports = add_hash
