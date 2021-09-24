const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { Chunk } = require('webpack');
const base =require('./webpack.config.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      {
        test: /\.scss$/i,
        use: ['style-loader','css-loader',
        {
          loader:"sass-loader",
          options:{implementation:require("dart-sass")}
        }
        ,],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader","less-loader"],
      },
      {
        test: /\.styl$/i,
        use: ["style-loader", "css-loader","stylus-loader"],// 将 Stylus 文件编译为 CSS
      },
      {
      test: /\.(png|svg|jpg|jpeg|gif|mp3|mp4)$/i,
      use: ["file-loader"]
      },
    ],
  },

};
 
