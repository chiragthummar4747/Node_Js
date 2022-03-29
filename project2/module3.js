const express = require('express')
var app = express()

var module3 = express.Router()
module3.get("/",(req,res)=>{
    res.json({'msg':'m 3 get'})
})
module3.post('/profile',(req,res)=>{
    res.json({'msg':'m 3 post profile'})
})
module.exports = module3