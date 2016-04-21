var webpack =  require('webpack');
var path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?https://game-night-jesse-robertson.c9users.io/',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/static/',
        filename: 'bundle.js'
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname, 'src'),
            loaders: ['react-hot','babel']
        }]
    },
    resolve: ['', '.js', '.jsx']
};