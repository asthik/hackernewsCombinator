const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    entry: './src/server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()],
    module:{
        rules: [
            {
                test: /\.css$/,
                loader: ['css-loader']
            }
        ]
    }
}

module.exports = webpackMerge(baseConfig, config);