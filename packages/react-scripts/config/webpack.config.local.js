var path = require("path");

module.exports = {
    entry: {
        main: './src/main'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(scss|css)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },
};