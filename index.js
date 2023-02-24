const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('hello world')
})

app.get('/test', (req, res) => {
    res.end('test page')
})

app.listen(3000)