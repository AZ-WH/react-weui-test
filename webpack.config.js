var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        js: ['./app.js'],
        vendor: ['react', 'classnames', 'react-router', 'react-dom', 'react-addons-css-transition-group']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    "presets": ['es2015', 'react']
                }
            }, {
                test: /\.less$/,
                loader: 'style!css!less'
            }, {
                test: /\.css/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            }, {
                test: /\.(png|jpg|svg)$/,
                loader: 'url?limit=25000'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            DEBUG: process.env.NODE_ENV !== 'production'
        }),
        new ExtractTextPlugin('weui.min.css'),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.html')
        })
    ]
};