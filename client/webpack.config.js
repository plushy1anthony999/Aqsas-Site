module.exports = {
    entry: [
        './index.js'
    ],
    output: {path: __dirname, filename: 'dist/bundle.js'},
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}