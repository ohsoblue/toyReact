const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    devtool: 'source-map',
    entry: {
        main: './main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            [
                                '@babel/plugin-transform-react-jsx',
                                {
                                    pragma: 'createElement'
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    mode: 'development',
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'toy-react',
            template: 'main.html',
        })
    ],
}