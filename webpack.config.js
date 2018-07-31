const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/index'
    ],
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            root: '_',
        },
    },
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        library: 'Skeleton',
        libraryTarget: 'umd',
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css/,
                use: ExtractTextPlugin.extract({
                  use: "css-loader"
                }),
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
      new ExtractTextPlugin("react-loading-skeleton.css")
    ]
};