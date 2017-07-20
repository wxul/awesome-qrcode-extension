var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var baseconfig = require('./webpack.base.config.js');

var APP_PATH = path.resolve(__dirname, '../dist');
var PRO_PATH = path.resolve(__dirname, '../');
var STATIC_PATH = path.resolve(__dirname, '../static');

var config = Object.assign({}, baseconfig, {
    output: {
        path: APP_PATH,
        publicPath: './',
        filename: '[name].js',
        chunkFilename: '[name],[chunkhash].min.js'
    }
});

config.plugins = (baseconfig.plugins || []).concat([
    new HtmlWebpackPlugin({
        filename: 'popup.html',
        template: 'src/popup.html',
        inject: true,
        env: process.env.NODE_ENV,
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: false
        }
    }),
    new CopyWebpackPlugin([{
        from: STATIC_PATH
    }])
]);

module.exports = config;