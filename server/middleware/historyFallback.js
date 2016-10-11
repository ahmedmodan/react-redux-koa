module.exports = function (options) {
    const middleware = require('connect-history-api-fallback')(options);
    return function* koaConnectHistoryApiFallbackAdapter (next) {
        middleware(this, null, () => {});
        yield next;
    }
};
