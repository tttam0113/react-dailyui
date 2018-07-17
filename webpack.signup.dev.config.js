const path = require('path');
const merge = require( 'webpack-merge' );
const DevConfig = require( './webpack.dev.config.js' );

module.exports = merge( DevConfig, {
    
    entry: {
        bundle: path.resolve('src/signup/index.jsx')
    }
} );