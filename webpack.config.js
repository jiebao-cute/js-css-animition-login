const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./dist')
    },
    mode: "none",
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "app.html",
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ['style-loader','css-loader','less-loader']
            },

        ]
    },
    devServer: {
        static:'./dist'
    }
};