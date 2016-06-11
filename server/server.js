
const express = require('express');
const routes = require('./middleware/api/routes');
const historyApiFallback = require('connect-history-api-fallback');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require, no-undef */
  require('dotenv').config();
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  /* eslint-enable global-require, no-undef */
  app.use(webpackDevMiddleware(compiler, {
    quiet: true,
    noInfo: true,
    stats: {
      colors: true,
      reasons: true
    },
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

routes(app, express);
app.use(historyApiFallback());
app.use(express.static(`${__dirname}/../dist`));

app.listen(process.env.PORT);
console.log('Koa is listening on port 3000');// eslint-disable-line no-console
