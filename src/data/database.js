require('dotenv').config()
const mongoose = require('mongoose')

const connect = () => {mongoose.connect('mongodb://localhost:27017/meu-pet-pe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(console.log('Database conectado com sucesso'))
    .catch(err => console.err)
}

module.exports = { connect }