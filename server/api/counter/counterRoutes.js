const userRoutes = require('koa-router')();
const counter = require('./counterController.js');

userRoutes.get('/', counter.getNum);

module.exports = userRoutes;
