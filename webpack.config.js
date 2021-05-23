const path = require('path');

const SRC_DIR = path.join(__dirname, './client/src');
const OUT_DIR = path.join(__dirname, './client/dist/');

module.exports = {
  mode: 'development',
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: OUT_DIR,
  },

  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      }, {
        test: /\.(gif|svg|jpg|png|jpeg)$/,
        loader: 'file-loader',
      }],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css'],
  },
};
