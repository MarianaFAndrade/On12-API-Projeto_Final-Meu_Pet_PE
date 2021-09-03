const express = require ('express');
const app = express()
const animalsRouter = require('./src/routes/animals.routes')
const db = require('./src/data/database')

db.connect()

app.use('/animals', animalsRouter)
app.use(express.json())

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});
