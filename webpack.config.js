const webpack = require("webpack");
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MODE = 'development';
// 開発環境の場合ソースマップ利用
const enabledSourceMap = (MODE === 'development');

module.exports = [
{
  mode: MODE,
  entry: ['./src/main.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,  './')
  },
  module: {
    rules: [
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.scss$/,
        use: [
          //linkタグにcssを展開する
          // 'style-loader',
          //cssをテキストとしてはきだす
          {
            loader: MiniCssExtractPlugin.loader,
          },
          //cssをjsにバンドルする
          {
            loader: 'css-loader',
            options: {
              url: false,
              minimize: true,
              sourceMap: enabledSourceMap,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          //sassをcssに変換する
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: "style.css",}),
    new HtmlWebpackPlugin({
       template: './src/index.pug'
    })
  ],
},
];
