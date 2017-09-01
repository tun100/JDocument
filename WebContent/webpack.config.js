var webpack = require("webpack");
var path = require("path");
var cleanWebpackPlugin = require("clean-webpack-plugin");
var htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
    vendors: ["vue", "vuex", "element-ui", "vue-router"]
  },
  devtool: "#eval-source-map",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.(scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: ["file-loader"]
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin("dist"),
    new htmlWebpackPlugin({
      template: "./template/index.html"
    })
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.js"
    }
  }
};
