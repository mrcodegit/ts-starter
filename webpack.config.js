const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackReloadPlugin = require('html-webpack-reload-plugin');
module.exports = {
    entry: './src/ts/main.ts',
    target: 'web',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackReloadPlugin()
    ]
};