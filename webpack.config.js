const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');


// eslint-disable-next-line no-undef
module.exports = {
  entry: './src/index.js',
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            cacheDirectory: true
          }
        }
      }
    ]
  },
  devServer: {
    port: 7890
  },
  plugins: [
    new HtmlPlugin({ template: './src/index.html' }),
    new CleanPlugin('./dist')
  ]
};


