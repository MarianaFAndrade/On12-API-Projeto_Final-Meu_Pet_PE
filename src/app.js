const express = require ('express');
const app = express()

const db = require('./src/data/database')
db.connect()

app.use(express.json())

const animalsRouter = require('./src/routes/animals.routes')
app.use('/animals', animalsRouter)

const shelterRouter = require('./src/routes/shelter.routes')
app.use('/shelter', shelterRouter)

const tutorRouter = require('./src/routes/tutor.routes')
app.use('/tutor', tutorRouter)

module.exports = app