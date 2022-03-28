const express = require('express')
const app = express()

app.listen(4141, () => {
    console.log('server listen : 4141')
})

// admin about page 
app.get('/', (req, res) => {
    res.sendFile('/admin1/about.html',{root:__dirname})
})

// admin about page 
// app.use((req, res) => {
//     res.sendFile('/admin1/about.html',{root:__dirname})
// })

// admin get info page 
app.get('/info', (req, res) => {
    res.sendFile(__dirname + '/admin1/getinfo.html')
})

// admin home page
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/admin1/home.html')
})

// admin insert page
app.get('/insert', (req, res) => {
    res.sendFile(__dirname + '/admin1/insert.html')
})

// manager about page
app.get('/manager/', (req, res) => {
    res.sendFile(__dirname + '/manager/about.html')
})

// manager getinfo page
app.get('/manager/info', (req, res) => {
    res.sendFile(__dirname + '/manager/getinfo.html')
})

// manager home page
app.get('/manager/home', (req, res) => {
    res.sendFile(__dirname + '/manager/home.html')
})

// manager insert page
app.get('/manager/insert', (req, res) => {
    res.sendFile(__dirname + '/manager/insert.html')
})

// user about page
app.get('/user/', (req, res) => {
    res.sendFile(__dirname + '/user/about.html')
})

// user getinfo page
app.get('/user/info', (req, res) => {
    res.sendFile(__dirname + '/user/getinfo.html')
})

//  user home page
app.get('/user/home', (req, res) => {
    res.sendFile(__dirname + '/user/home.html')
})

// user insert page
app.get('/user/insert', (req, res) => {
    res.sendFile(__dirname + '/user/insert.html')
})
