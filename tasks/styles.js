const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const { paths } = require('./config')

function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 2 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8']))
    .pipe(gulp.dest(paths.styles.dest))
}

module.exports = styles
