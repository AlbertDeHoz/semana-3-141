const router = require('express').Router();
const {User} = require('../../models');
const userController = require('../../controller/MiControllers.js');
var bcrypt = require('bcryptjs');

//api/user
router.get('/', async(req,res) =>{
    const user = await user.findAll();
    res.status(200).json(user);
})
//api/user/login
router.post('/register', async(req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.status(200).json(user);
    
});

module.exports = router;