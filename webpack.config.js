const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: ['css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|svg|jpeg)$/,
                type: 'asset/resource'
            },
        ]
    },
    plugins: [
        /* new HtmlWebpackPlugin({
            template: 'src/index.html'
        }) */
        new HtmlBundlerPlugin({
            entry: {
                index: 'src/index.html',    // define templates here
            },
            js: {
                filename: 'js/[name].[contenthash:8].js',   // output filename of compiled JavaScript
            },
            css: {
                filename: 'css/[name].[contenthash:8].css',  // output filename of extracted CSS
            },
        }),
    ],
    devServer: {
        open: true,
        hot: true,
        static: path.resolve(__dirname, "dist"),
        watchFiles: ['src/**/*.html', 'public/**/*'],
        client: {
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: true,
            },
        },
    }
}