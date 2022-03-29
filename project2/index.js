const express = require('express')
const module1= require('./module1')
const module2 = require('./module2')
const module3 = require('./module3')
const app = express()

app.use('/m1',module1)
app.use('/m2',module2)
app.use('/m3',module3)

app.listen(4444, () => {
    console.log('server listen')
})


