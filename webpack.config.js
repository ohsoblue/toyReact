const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
    entry: {
        main: './main.js'
    },
    devtool: 'inline-source-map',
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
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true,
        open: true
    }
}