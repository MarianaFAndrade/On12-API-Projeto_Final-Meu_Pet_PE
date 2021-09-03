const mongoose = require('mongoose')

const animalsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {type: String},
    especie: {type: String},
    sexo: {type: String},
    idade: {type: Number},
    porte: {type: String},
    castrado: {type: String},
    abrigo: {type: String},
    bairro: {type: String},
    status: {type: String},
    criadoEm: {
        type: Date,
        required: true,
        default: new Date
    }
})

module.exports = mongoose.model('animals', animalsSchema)