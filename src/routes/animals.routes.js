const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Animals = require('../models/animals')

//READ - listar todos os animais

router.get('/', async (req, res) => {
    const animals = await Animals.find().populate('abrigo')
    res.json(animals)
})

//CREATE - Criar um animal

router.post('/', async (req, res) => {
    const createAnimals = new Animals ({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        especie: req.body.especie,
        sexo: req.body.sexo,
        idade: req.body.idade,
        porte: req.body.porte,
        castrado: req.body.castrado,
        abrigo: req.body.abrigo,
        bairro: req.body.bairro,
        status: req.body.status,
        criadoEm: req.body.criadoEm,
    })
    const animalsJaExiste = await Animals.findOne({
        nome: req.body.nome, 
        especie: req.body.especie,
        sexo: req.body.sexo,
        idade: req.body.idade,
        porte: req.body.porte,
        castrado: req.body.castrado,
        abrigo: req.body.abrigo,
        bairro: req.body.bairro,
        status: req.body.status,
    })

    if (animalsJaExiste) {
        return res.status(409).json({error: 'Animal já cadastrado'})
    }

    try{
        const newAnimals = await createAnimals.save()
        res.status(201).json(newAnimals)
    }   catch(err){
        res.status(400).json({ message: err.message})
    }
})

module.exports = router