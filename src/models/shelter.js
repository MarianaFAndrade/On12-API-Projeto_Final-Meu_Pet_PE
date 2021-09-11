const mongoose = require('mongoose')

const shelterSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    },
}, {
    versionKey: false
})

module.exports = mongoose.model('shelter', shelterSchema)