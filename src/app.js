const express = require ('express');
const cors = require("cors");
app.use(cors());

const app = express()
app.use(express.json())

const db = require('./src/data/database')
db.connect()

const animalsRouter = require('./src/routes/animals.routes')
app.use('/animals', animalsRouter)

const shelterRouter = require('./src/routes/shelter.routes')
app.use('/shelter', shelterRouter)

const tutorRouter = require('./src/routes/tutor.routes')
app.use('/tutor', tutorRouter)

module.exports = app