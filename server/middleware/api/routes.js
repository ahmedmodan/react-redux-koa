const counterRoutes = require('./counter/counterRoutes');

module.exports = function (app, express) {
  const counterRouter = express.Router();
  app.use('/asyncAdd', counterRouter);
  counterRoutes(counterRouter);
};
