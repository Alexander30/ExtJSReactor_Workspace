'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist',
        //inline:true,
        hot:true
    },
    entry:[
        //Webpack Automatic refresh Inline mode with Node.js API
        'webpack-dev-server/client?http://localhost:8080/',
        // HMR with node.js API
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    output:{
        path: path.join(__dirname, 'dist'),
        filename: './bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx']
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
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
