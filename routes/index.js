const router = require('express').Router();
const apiRouterUser = require('./api/user.js');

router.use('/user',apiRouterUser);

module.exports = router;