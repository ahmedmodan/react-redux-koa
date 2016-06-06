const userRoutes = require('koa-router')();

userRoutes.get('/', function* () {
  this.response.body = 5;
});

module.exports = userRoutes;