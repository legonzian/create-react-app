var path = require("path");
var webpack = require("webpack");
var htmlWebPackPlugin = require("html-webpack-plugin");
var fs = require("fs");

module.exports = {
  entry: [
    require.resolve('./polyfills'),
    "./src/main"
  ],
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "react.[name].bundle.js",
    publicPath: "/"
  },
  devtool: "source-map",
  plugins: fs
    .readdirSync("./src/Templates")
    .map(function(filename) {
      return new htmlWebPackPlugin({
        template: "./src/Templates/" + filename,
        filename: filename
      });
    })
    .concat(new webpack.HotModuleReplacementPlugin()),
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader", "eslint-loader"]
      },
      {
        test: /\.(scss|css)$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader"
      }
    ]
  }
};
