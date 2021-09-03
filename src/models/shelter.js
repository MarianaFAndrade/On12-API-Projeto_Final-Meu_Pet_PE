const mongoose = require('mongoose')

const shelterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {type: String},
    endereço: {type: String},
    bairro: {type: String},
    telefone: {type: String},
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('shelter', shelterSchema)