var http = require('http')
var fs = require('fs')
let app = http.createServer((req,res)=>{
    fs.readFile('1.txt','utf-8',function(error,data){
        if(error){
            res.writeHead(500);
            res.write('unebal to read.....');
            res.end();
        }
        else{
            res.write(data)
            res.end()
        }
    })
})
app.listen(7412,()=>{
    console.log('server listen.....')
})  