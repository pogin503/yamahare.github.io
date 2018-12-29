const gulp = require('gulp')
const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackConfig = require('../webpack.config')
const { paths } = require('./config')

// jsをwebpackをつかってbundleする
function scripts () {
  return gulp.src(paths.scripts.src)
    .pipe(webpackStream(
        webpackConfig, webpack
    ))
    .pipe(gulp.dest(paths.scripts.dest))
}

module.exports = scripts
