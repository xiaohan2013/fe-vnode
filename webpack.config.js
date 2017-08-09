const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    entry: './src/demo.js',
    output: {
        path: path.resolve(__dirname, '/dist/'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [path.resolve(__dirname, 'src')],
            exclude: [],
            enforce: "pre",
            loader: 'babel-loader'
        }]
    },
    devtool: "source-map",
    context: __dirname,
    devServer: {
        contentBase: path.join(__dirname, 'dist/'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: './dist/index.html',
            template: './src/index.html'
        })
    ]
}