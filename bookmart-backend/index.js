require('dotenv').config()
const express= require('express')
const cors = require('cors');
const router = require('./ROUTER/router');

const bsServer= express();
require('./DB/connection')


bsServer.use(cors())
bsServer.use('/uploads',express.static('./uploads'))

bsServer.use(express.json());

const PORT = 4000;
bsServer.use(router)

bsServer.listen(PORT,()=>{
    console.log(`server running succesfully at  port :${PORT}`)
})
bsServer.get('/', (req,res)=>{
    res.send("projrcir server is running succesfully")
})



