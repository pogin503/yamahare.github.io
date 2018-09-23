const ASSET_ROOT = 'src'
const DEST_ROOT = 'public'

module.exports = {
  paths: {
    styles: {
      src: `${ASSET_ROOT}/sass/**/*.scss`,
      dest: `${DEST_ROOT}/styles`,
    }
  }
}