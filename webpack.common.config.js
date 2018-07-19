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
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(js|jsx|mjs)$/,
                        include: path.resolve(__dirname, 'src'),
                        loader: require.resolve('babel-loader'),
                        options: {
                            babelrc: false,
                            presets: [require.resolve('babel-preset-react-app')],
                            cacheDirectory: true,
                        },
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
                        // Exclude `js` files to keep "css" loader working as it injects
                        // its runtime that would otherwise processed through "file" loader.
                        // Also exclude `html` and `json` extensions so they get processed
                        // by webpacks internal loaders.
                        exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        }
                    }
                ]
            }
            
        ]
    },
};