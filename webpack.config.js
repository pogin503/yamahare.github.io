const path = require('path');
const env = process.env.NODE_ENV
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: env || 'development',
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname,  './public/js/'),
    filename: 'bundle.js',
  },
  // 拡張子が.jsのファイルはbabel-loaderを通してビルド(node_modulesは除外)
  module: {
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
