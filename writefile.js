var fs = require('fs')
const content = 'i m happy....'
fs.writeFile('1.txt', content,() => {
    console.log('file writen........')
})