const express = require('express')
const querystring = require('querystring')
const app = express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/formformet.html')
})
app.post('/',(req, res) => {
    res.writeHead(200, ("content-type", "text/html"))
    if (req.method == "POST") {
        var postparameters = "";
        req.on("data", function (data) {
            postparameters += data;
        })
        req.on("end", function () {
            var postdata = querystring.parse(postparameters)
            if (postdata["uname"] == "chirag" && postdata["upwd"] == "4747") {
                res.write("<h1>sucess</h1>");
            }   
            else {
                res.write("<h1>fail</h1>")
            }
            res.end()
            console.log("post", postparameters);

        })
    }
})
app.listen(1233,()=>{
    console.log("port listion ")
})