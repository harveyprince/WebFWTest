var path = require('path');
module.exports = {
/*
    entry: './app/scripts/main.js',
    output: {
        path: './build',
        filename: 'index.js',
        publicPath: '/public/'
    },
    devServer: {
        inline: true,
        port: 3333
    },
    */
    devtool: 'source-map',
    output: {
        filename: '[name].js',
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude:  /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.ts$/,
                exclude:  /node_modules/,
                loader: 'ts-loader'
            }
        ],
        noParse: [ path.join(__dirname, 'node_modules', 'angular2', 'bundles') ]
    }
}
