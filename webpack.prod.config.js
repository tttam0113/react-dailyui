const path = require('path');
const webpack = require( 'webpack' );
const merge = require( 'webpack-merge' );
const CommonConfig = require( './webpack.common.config.js' );


module.exports = merge( CommonConfig, {
    mode: 'production',
    output: {
        path: path.resolve('dist'),
        filename: 'static/js/bundle.js'
        
    },
    watch: false, 
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
} );