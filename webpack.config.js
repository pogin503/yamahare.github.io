const path = require('path');
const env = process.env.NODE_ENV

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
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
