var express = require('express')
var app = express();
app.listen(1221,()=>{
    console.log("server port :1221")
})
app.get("/",(req,res)=>{
    res.write("hello world");
    res.end()
})