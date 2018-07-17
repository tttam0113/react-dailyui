const path = require('path');
// const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        bundle: path.resolve('src/index.jsx')
    },
    output: {

    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src')
        ],
        extensions: ['.js', '.json', '.jsx', '.css'],
        alias: {
            //module: 'new-module',
            //module: path.resolve(__dirname, 'src/third/module.js')
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('public/index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                enforce: 'pre',
                exclude: [/node_modules/],
                use: [{
                    options: {
                        baseConfig: {
                            extends: ['eslint-config-react-app'],
                        },
                        ignore: false,
                        useEslintrc: false,
                    },
                    loader: 'eslint-loader',
                }, ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                require('postcss-flexbugs-fixes'),
                                autoprefixer({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9', // React doesn't support IE8 anyway
                                    ],
                                    flexbox: 'no-2009',
                                }),
                            ],
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                //loader: 'style!css?importLoaders=1&localIdentName=[local]_[hash:base64:5]!postcss!sass'
                use: [
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                include: [/(src|test)/],
                loader: 'babel-loader'
            }
        ]
    },
};