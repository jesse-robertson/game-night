var webpack =  require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?https://game-night-jesse-robertson.c9users.io/',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            favicon: 'src/assets/favicon.ico',
            template: 'src/assets/index.html'
        })
        
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, 'src'),
            loaders: ['react-hot','babel']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
      }
};