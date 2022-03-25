const http = require('http')
const url = require('url')
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':"text/html"})
    const queryobject = url.parse(req.url,true).query
    console.log(queryobject)

    const uname = queryobject.uname;
    const upwd = queryobject.upwd;
    uname ==="chirag"&&upwd==="4747"?res.write("<h1>sucess</h1>"):res.write("<h1>fail</h1>")
    res.end();
})
server.listen(1236,()=>{
    console.log('server listen.........')
})