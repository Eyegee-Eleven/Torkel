var morgan = require('morgan')
var helmet = require('helmet')
const cors = require('cors')
const express = require('express')
const app = express()

const port = 3000

//middleware
app.use(morgan('combined'))
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

//endpoint imports
var current = require('./routes/current/current')
var users = require('./routes/users/users')
var runner = require('./routes/runner/runner')

//endpoint routes

app.use('/current', current)

app.use('/users', users)

app.use('/runner', runner)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

module.exports = app