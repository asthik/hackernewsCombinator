const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            }
        ]
    }
}
module.exports = webpackMerge(baseConfig, config);