
const koa = require('koa');
const serve = require('koa-static');
const router = require('./api/routes');
const historyApiFallback = require('./middleware/historyFallback');

const app = koa();

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config');
  const compiler = webpack(webpackConfig);
  const devMiddleware = require('./middleware/dev-middleware');
  app.use(devMiddleware.webpackDevMiddleware(webpackConfig, compiler));
  app.use(devMiddleware.webpackHotMiddleware(compiler));
}

app.use(function *(next) {
  try {
    yield next;
  } catch (err) {
    this.status = err.status || 500;
    this.body = err.message;
    this.app.emit('error', err, this);
  }
});

app.use(router.routes());
app.use(historyApiFallback());
app.use(serve(`${__dirname}/../dist`));

app.listen(process.env.PORT);
console.log('Koa is listening on port 3000');// eslint-disable-line no-console
