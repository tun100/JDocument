var webpack = require('webpack')
var path = require('path')
var cleanWebpackPlugin = require('clean-webpack-plugin')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: "./src/index.js",
        vendors: ['vue', 'vuex', 'element-ui']
    },
    devtool: "inline-source-map",
    output: {
        filename: "[name].[hash].js",
        path: path.resolve(__dirname,"dist")
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','postcss-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin('dist'),
        new htmlWebpackPlugin({
            template: './template/index.html'
        })
    ]
};