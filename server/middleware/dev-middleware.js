const webpackDevMiddleware = function (webpackConfig, compiler) {
  return require('koa-webpack-dev-middleware')(compiler, {
    quiet: true,
    noInfo: true,
    stats: {
      colors: true,
      reasons: true
    },
    publicPath: webpackConfig.output.publicPath
  });
};

const webpackHotMiddleware = function (compiler) {
  return function* (next) {
    yield require('webpack-hot-middleware')(compiler).bind(null, this.req, this.res);
    yield next;
  };
};

const devMiddleware = {
  webpackDevMiddleware,
  webpackHotMiddleware
};

module.exports = devMiddleware;
