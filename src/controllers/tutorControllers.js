const mongoose = require('mongoose')
const Tutor = require('../models/tutor')

const getAll = async (req, res) => {
    const tutor = await Tutor.find()
    res.json(tutor)
}

const createTutor = async (req, res) => {
    const createTutor = new Tutor ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        telefone: req.body.telefone,
        email: req.body.email,
        criadoEm: req.body.criadoEm,

    })
    const tutorJaExiste = await Tutor.findOne({
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        telefone: req.body.telefone,
        email: req.body.email,
    })
    if (tutorJaExiste) {
        return res.status(409).json({error: 'Tutor já cadastrado'})
    }
    
    try{
        const newTutor = await createTutor.save()
        res.status(201).json(newTutor)
    }   catch(err){
        res.status(400).json({ message: err.message})
    }
}

module.exports = {
    getAll,
    createTutor
}