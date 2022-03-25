const { text } = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const http = require("http")
const querystring = require("querystring")
const server = http.createServer((req, res) => {
    console.log(typeof(req))
    res.writeHead(200, ("content-type", "text/html"))
    if (req.method == "POST") {
        var postparameters = "";
        req.on("data", function (data) {
            postparameters += data;
        })
        req.on("end", function () {
            var postdata = querystring.parse(postparameters)
            console.log(postdata.uname)
            console.log(postdata.upwd)
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
server.listen(1230, () => {
    console.log("server port 5050");
})










