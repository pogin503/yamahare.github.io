const del = require('del')

// 出力先のディレクトリを空にする
function clean() {
  return del(['public'])
}

module.exports = clean
