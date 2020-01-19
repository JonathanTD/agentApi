const router = require('express').Router();

router.use('/agent', require('./agent.router'));
router.use('/customer', require('./customer.router'));

module.exports = router;