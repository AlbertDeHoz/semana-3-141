const {User} = require('../models/');
const bcrypt = require('bcryptjs');
const tokenKey = require('../secret/config')
const jwt = require('jsonwebtoken')

exports.signin = async (req, res, next) => {
    const user =  await User.findOne({ where : { email: req.body.email}});  

    if (user){
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if(iguales){
            //res.json({success: createToken(user)});
            const token = jwt.sign({id: user.id}, tokenKey.secret,{
                expiresIn: 60*60*24
            })
            await res.status(200).send({accessToken:token})
        }
        else{
            res.status(401).send('Invalid Password');
        }
    }else{
        res.status(404).send('User Not Found');
    }
    next();
}

exports.signup = async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
}



exports.prueba = async (req,res) => {
    const user = await User.findAll();
    res.json(user);
    
}