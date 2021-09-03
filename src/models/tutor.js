const mongoose = require('mongoose')

const tutorSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {type: String},
    endereço: {type: String},
    bairro: {type: String},
    telefone: {type: String},
    email: {type: String},
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('tutor', tutorSchema)