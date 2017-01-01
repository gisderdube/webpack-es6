const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),

    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'public'),
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    },

    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 9000,
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
        }),
    ],
}
