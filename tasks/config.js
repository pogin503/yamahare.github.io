const ASSET_ROOT = 'src'
const DEST_ROOT = 'public'

module.exports = {
  paths: {
    styles: {
      src: `${ASSET_ROOT}/sass/**/*.scss`,
      dest: `${DEST_ROOT}/css`,
    },
    templates: {
      src: `${ASSET_ROOT}/pug/**/*.pug`,
      dest: `${DEST_ROOT}/`,
    },
    images: {
      src: `${ASSET_ROOT}/image/**/*`,
      dest: `${DEST_ROOT}/image`,
    },
    scripts: {
      src: `${ASSET_ROOT}/js/main.js`,
      dest: `${DEST_ROOT}/js`,
      watch: `${ASSET_ROOT}/js/**/*.js`,
    }
  }
}
