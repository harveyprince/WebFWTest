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
    output: {
        filename: '[name].js',
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
    }
}
