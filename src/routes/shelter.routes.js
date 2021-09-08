const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Shelter = require('../models/shelter')

//READ - listar todos os animais

router.get('/', async (req, res) => {
    const shelter = await Shelter.find()
    res.json(shelter)
})

//CREATE - Criar um abrigo

router.post('/', async (req, res) => {
    const createShelter = new Shelter ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        telefone: req.body.telefone,
        criadoEm: req.body.criadoEm,
    })
    const shelterJaExiste = await Shelter.findOne({nome: req.body.nome})
    if (shelterJaExiste) {
        return res.status(409).json({error: 'Abrigo/LT já cadastrado'})
    }
    
    try{
        const newShelter = await createShelter.save()
        res.status(201).json(newShelter)
    }   catch(err){
        res.status(400).json({ message: err.message})
    }
})

module.exports = router