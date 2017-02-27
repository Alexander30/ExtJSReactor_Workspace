'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtJSReactorWebpackPlugin = require('@extjs/reactor-webpack-plugin');
const sourcePath = path.join(__dirname, './src');

module.exports={
    devtool: 'eval',
    context:sourcePath,
    
    entry:[
        './index.js'
    ],
    output:{
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                use:['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new ExtJSReactorWebpackPlugin({
            sdk: 'c:\\Users\\ToolsTeam\\Documents\\Architect\\frameworks\\ext62\\6.2.1.167\\commercial',
            theme: 'theme-material',
            production:false,
            packages:['charts']
        }),
        new HtmlWebpackPlugin({
            hash:true,
            template:'index.html'
        }),
        
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        }),
        new webpack.HotModuleReplacementPlugin()
        
    ],
    stats: {
        colors: {
            green: '\u001b[32m',
        }
    },
    devServer:{
        contentBase: './build',
        inline:true,
        hot:true,
        stats:{
                assets: true,
                children: false,
                chunks: false,
                hash: false,
                modules: false,
                publicPath: false,
                timings: true,
                version: false,
                warnings: true,
            colors:{
                green:'\u001b[32m'
            }
        }
    },

}
