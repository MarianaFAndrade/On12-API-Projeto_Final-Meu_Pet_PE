const mongoose = require('mongoose')

const animalsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nome: {
        type: String,
        required: true
    },
    especie: {
        type: String,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    porte: {
        type: String,
        required: true
    },
    castrado: {
        type: String,
        required: true
    },
    abrigo: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'shelter'
    },
    bairro: {
        type: String,
        required: true
    },
    status: {
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

module.exports = mongoose.model('animals', animalsSchema)