const path = require("path");
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "main.js",
  },
  /* devtool: "source-map", */
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(ico|jpg|png|svg|jpeg)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    /* new HtmlWebpackPlugin({
            template: 'src/index.html'
        }) */
    new HtmlBundlerPlugin({
      entry: "src/",
      js: {
        filename: "js/[name].[contenthash:8].js", // output filename of compiled JavaScript
      },
      css: {
        filename: "css/[name].[contenthash:8].css", // output filename of extracted CSS
      },
    }),
  ],
  devServer: {
    open: true,
    hot: true,
    static: path.resolve(__dirname, "dist"),
    watchFiles: ["src/**/*.*"],
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
  },
};
