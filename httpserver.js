var http = require('http')
var server = http.createServer((request,response)=>{
    console.log('request recive....')
    response.setHeader('content-type','text/html');
    response.write('hello')
    response.write('<h1>hello,i m student</h1>');
    response.write('request url'+request.url)
    response.write("request method"+request.method)
    response.end();
})
server.listen(7894,()=>{
    console.log('server listen....')
})