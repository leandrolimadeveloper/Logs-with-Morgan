const express = require('express')
const app = express()
const morganBody = require('morgan-body')
const fs = require('fs')
const path = require('path')
const moment = require('moment')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Log file
const log = fs.createWriteStream(
    path.join(__dirname, './logs', `express${moment().format('YYYY-MM-DD')}.log`), { flags: 'a' }
)

morganBody(app, {
    noColors: true,
    stream: log
})  

app.get('/', (req, res) => {
    res.send('Ok')
})

app.post('/testpost', (req, res) => {
    res.send('Test')
})

const port = 8686
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})      