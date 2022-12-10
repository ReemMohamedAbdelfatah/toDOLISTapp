const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // production
  entry: {
    main: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: { static: './dist' },
  // loaders
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(svg|jpeg|ico|png|webp|jpg|gif)$/, type: 'asset/resource' },
      { test: /\.(woff|woff2|eot|ttf|otf)$/i, type: 'asset/resource' },
    ],
  },
  // plugins
  plugins: [new HtmlWebpackPlugin({
    title: 'Let Us Organize Your Day :)', // what is the title of your page
    filename: 'index.html', // what is your file name
    template: path.resolve(__dirname, 'src/index.html'),
  })],
};