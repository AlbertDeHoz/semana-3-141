const router = require('express').Router();
const apiRouterUser = require('./api/user.js');

router.use('/user',apiRouterUser);

router.get('/', async(req,res) =>{
    res.send('hola');
})

module.exports = router;