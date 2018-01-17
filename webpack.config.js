const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
template:'./public/index.html',
filename:'index.html',
inject:'body'
})
module.exports = {
    entry: './src/app/App.js',
    output: {
        path: path.resolve('public'),
        filename: 'index_bundle.js'
    },
    resolve: {
        alias: {'components': path.resolve(__dirname, './src/app/components')}
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {test: /\.css$/,  loaders: ['style-loader', 'css-loader'],exclude: /node_modules/}
        ]
    },

    plugins: [HtmlWebpackPluginConfig]
}
