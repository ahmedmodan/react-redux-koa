const router = require('koa-router')();
const counterRoutes = require('./counter/counterRoutes');

router.use('/asyncAdd', counterRoutes.routes());

module.exports = router;
