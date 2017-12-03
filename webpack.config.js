const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('client/public/dist'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react']}},
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015', 'react', 'stage-0'], plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']}},
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
            { test: /\.css$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},

        ]
    }
}