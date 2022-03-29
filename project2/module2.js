const express = require('express')
var app = express()

var module2 = express.Router()
module2.get("/",(req,res)=>{
    res.json({'msg':'m 2 get'})
})
module2.post('/profile',(req,res)=>{
    res.json({'msg':'m 2 post frofile'})
})
module.exports = module2
    