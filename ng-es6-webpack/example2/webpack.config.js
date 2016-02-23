var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var SRC_SIR = path.resolve(__dirname, 'src');
var BUILD_SRC = path.resolve(__dirname, 'build');

module.exports = {
    context: SRC_SIR,
    entry:{
        vendor: [
            'angular',
            'angular-ui-router'
        ],
        app: ['index.js']
    },
    output:{
        path: BUILD_SRC,
        filename: '[name].js'
    },
    resolve:{
        root: SRC_SIR,
        extensions: ['', '.js'],
        moduleDirectories: ['node_modules']
    },
    module:{
        loaders:[
            {
                test: /\.js$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loaders: ['file-loader']
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(BUILD_SRC),
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'index.html'
        })
    ],
    devServer:{
        contentBase: BUILD_SRC
    }
};