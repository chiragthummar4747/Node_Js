const express = require('express')
var app = express()

var module1 = express.Router()
module1.get("/",(req,res)=>{
    res.json({'msg':'m 1 get'})
})
module1.post('/profile',(req,res)=>{
    res.json({'msg':'m 1 post frofile'})    
})
module.exports = module1