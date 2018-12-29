const browserSync = require('browser-sync')
const server = browserSync.create()

// 開発サーバ再起動
function reload(done){
  server.reload()
  done()
}

// 開発サーバ起動
function serve(done){
  server.init({
    server: {
      baseDir: './public'
    },
    open: 'external',
    port: 9000
  })
  done()
}

module.exports = {
  reload,
  serve
}
