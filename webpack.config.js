'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        inline: true
    },
    entry:[
        './src/index.jsx'
    ],
    output:{
        path: path.join(__dirname, 'dist'),
        filename: './bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            "react-dom":path.resolve('./node_modules/react-dom')
        }
    },
    module:{
        loaders:[
            {
                test:/\.jsx$/,
                loaders:['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            hash:true,
            template:'./src/index.html'
        })
    ]
}
