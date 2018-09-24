const gulp = require('gulp')
const sass = require('gulp-sass')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const sassGlob = require('gulp-sass-glob')
const cssImport = require("postcss-import")
const { paths } = require('./config')
// postcssのプラグイン

function styles() {
  const plugins = [
    cssImport({ path: [ 'node_modules' ] }),
    autoprefixer({ browsers: ["last 2 versions", "ie >= 11", "Android >= 4"] }),
    cssnano({ autoprefixer: false })
  ];
  return gulp.src(paths.styles.src)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))
    .pipe(gulp.dest(paths.styles.dest))
}

module.exports = styles
