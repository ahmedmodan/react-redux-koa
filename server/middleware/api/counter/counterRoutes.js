
const counter = require('./counterController.js');

module.exports = function (app) {
  app.get('/', counter.getNum);
};
