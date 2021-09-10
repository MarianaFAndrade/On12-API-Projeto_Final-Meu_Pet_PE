require('dotenv').config()
const mongoose = require('mongoose')

const MONGODB_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/meu-pet-pe'

const connect = () => {mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(console.log('Database conectado com sucesso'))
    .catch(err => console.err)
}

module.exports = { connect }