const path = require('path');
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const CommonConfig = require( './webpack.common.config.js' );

process.env.NODE_ENV = 'development';

module.exports = merge( CommonConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        inline: true, 
        port: 3000
    },
    output: {
        path: path.resolve('dist'),
        filename: 'static/js/bundle.js',
        sourceMapFilename: 'bundle.map',
        pathinfo: true,
    },
    watch: true, 
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
} );