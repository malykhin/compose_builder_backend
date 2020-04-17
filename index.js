const express = require('express')

const { port } = require('./config')

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at: ${port}`))
