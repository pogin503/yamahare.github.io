const path = require('path');

const MODE = 'development';

module.exports = {
  mode: MODE,
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname,  './public/js/'),
    filename: 'bundle.js',
  },
}
