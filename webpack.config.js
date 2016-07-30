var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
module.exports = {
    entry: './app/scripts/main.js',
    output: {
        path: './',
        filename: 'index.js'
    },
    devServer: {
        inline: true,
        port: 3333
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
            }
        ]
    },
    plugins: [
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: 3000,
                proxy: 'http://localhost:3333/'
            },
            {
                reload: false
            }
        )
    ]
}
