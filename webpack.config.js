const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ROOT_PATH = path.resolve(__dirname);

const webpackConfiguration = {
  devtool: 'cheap-module-source-map',
  entry: [
    path.resolve(ROOT_PATH, 'src/main.jsx')
  ],
  module: {
    preLoaders: [{
      test: /\.(js|jsx)?$/,
      loaders: ['eslint'],
      include: path.resolve(ROOT_PATH, 'src')
    }],
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_modules/,
      loader: 'babel'
    },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
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
    extensions: ['', '.js', '.jsx']
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
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
      'window.$.velocity': 'velocity-animate/velocity.js'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};

if (process.env.NODE_ENV === 'development') {
  const webpackHMR = new webpack.HotModuleReplacementPlugin();
  webpackConfiguration.plugins.push(webpackHMR);
  webpackConfiguration.entry.push('webpack-hot-middleware/client');
}

if (process.env.NODE_ENV === 'production') {
  webpackConfiguration.devtool = 'source-map';
  const productionENV = new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  });
  const webpackDedupe = new webpack.optimize.DedupePlugin();
  const webpackNoErrors = new webpack.NoErrorsPlugin();
  webpackConfiguration.plugins.push(
    webpackDedupe,
    webpackNoErrors,
    productionENV
  );
}


module.exports = webpackConfiguration;
