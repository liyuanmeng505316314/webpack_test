const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { Chunk } = require('webpack');
const base =require('./webpack.config.base')


module.exports = {
    ...base,

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/i,
        // 如果变成内部的style标签，内联式，那么改为"style-loader"
        // 开发的时候用style，开发完成就用MiniCssExtractPlugin.loader
        use: ["style-loader", "css-loader"],
      },
    ],
  },

};
 
