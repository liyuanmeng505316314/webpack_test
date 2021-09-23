const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { Chunk } = require('webpack');



module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'liyuanmeng.[contenthash].js',
  },
  plugins:[
    new HtmlWebpackPlugin({
    title: '梦梦',
    template: './src/assets/index.html' 
  }),
], 
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};
 
