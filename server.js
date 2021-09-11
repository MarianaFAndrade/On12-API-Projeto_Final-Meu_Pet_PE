const express = require ('express');

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

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
