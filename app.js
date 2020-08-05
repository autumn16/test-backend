const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const dutyRoute = require('./api/routes/duty')
const healthRoute = require('./api/routes/health')
const sanitationRoute = require('./api/routes/sanitation')
const securityRoute = require('./api/routes/security')
const visitorRecordRoute = require('./api/routes/visitor-record')

const app = express()

// CORS AUTHORIZATION

app.use(cors())

// BODY PARSER

app.use(express.json())
    //app.use(express.urlencoded({extended: false}))

// ERROR HANDLING

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('BROKEN')
})

// ROUTER HANDLE REQUEST HERE
app.use('/duty', cors(), dutyRoute)
app.use('/health', cors(), healthRoute)
app.use('/sanitation', cors(), sanitationRoute)
app.use('/security', cors(), securityRoute)
app.use('/visitor-record', cors(), visitorRecordRoute)

module.exports = app