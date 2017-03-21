const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
  const isProduction = plugin => env.prod ? plugin : undefined;
  const removeEmpty = array => array.filter(p => !!p);

  return {
    context: __dirname,
    entry: {
      app: path.join(__dirname, './frontend/tempo.jsx'),
      vendor: ['react', 'react-dom', 'react-router']
    },
    output: {
      path: path.join(__dirname, 'app', 'assets', 'javascripts', 'build'),
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: [/\.jsx?$/, /\.js?$/],
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react'],
            cacheDirectory: true
          }
        }
      ]
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '*' ]
    },
    plugins: removeEmpty([
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].js'
      }),
      isProduction(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      })),
      isProduction(new webpack.optimize.UglifyJsPlugin({
        compress: {
          'screw_ie8': true,
          'warnings': false,
          'unused': true,
          'dead_code': true
        },
        output: {
          comments: false
        },
        sourceMap: false
      }))
    ])
  }
};
