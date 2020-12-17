const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');
const bodyPArser = require('body-parser')

const app = express();

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-with, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods: GET, POST, DELETE");
    next()
})

app.use(morgan('dev'));
app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({extended: true}))

app.use('/api',apiRouter)

app.set('PORT',3000)

app.listen(app.get('PORT'), ()=>{
    console.log('serverup');
})
