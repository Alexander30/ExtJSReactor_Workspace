var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    devtool: 'inline-source-map',
    devServer:{
        contentBase: './dist'
    },
    entry:[
        './src/index.js'
    ],
    output:{
        path: path.join(__dirname, 'dist'),
        filename: './bundle.js'
    },
    resolve:{
        extensions:['*','.js']
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loaders:['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            hash:true,
            tempalte:'./src/index.html'
        })
    ]
}
