var fs = require('fs')
fs.readFile('1.txt',  (error , data) => {
    if(error)
        console.log(error)
    else{
        console.log(data.toString())
    }
})