const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname);

const webpackConfiguration = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.resolve(ROOT_PATH, 'src/main.jsx')
  ],
  module: {
    preLoaders: [{
      test: /\.js$|\.jsx$/,
      loader: 'eslint',
      include: path.resolve(ROOT_PATH, 'src')
    }],
    loaders: [
      {
      test: /\.js$|\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(woff2?|svg)$/,
        loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.styl']
  },
  postcss: [autoprefixer],
  output: {
    path: path.resolve(ROOT_PATH, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      __dev__: JSON.stringify(process.env.NODE_ENV) !== "'production'"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'assets', 'index.html')
    })
  ]
};

if (process.env.NODE_ENV === 'development') {
  webpackConfiguration.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
  webpackConfiguration.entry.push('webpack-hot-middleware/client');
  webpackConfiguration.module.loaders.push({
    test: /\.styl$/,
    loaders: [
      'style-loader',
      'css-loader?modules&localIdentName=[local]_[hash:base64:3]',
      'postcss-loader',
      'stylus']
  })
}

if (process.env.NODE_ENV === 'production') {
  webpackConfiguration.devtool = 'source-map';
  webpackConfiguration.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles/main.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );

  webpackConfiguration.module.loaders.push({
    test: /\.styl/,
    loader: ExtractTextPlugin.extract('style-loader',
      'css-loader?modules&localIdentName=[local]_[hash:base64:3]' +
      '!postcss-loader!stylus-loader?includePaths[]=' +
      encodeURIComponent(path.resolve(__dirname, 'src')))
  })
}


module.exports = webpackConfiguration;
