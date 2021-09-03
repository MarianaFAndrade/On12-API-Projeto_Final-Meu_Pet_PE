const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Animals = require('../models/animals')

//READ - listar todos os animais

router.get('/', async (req, res) => {
    const animals = await Animals.find()
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
        criadoEm: req.body.criadoEm
    })
    const newAnimals = await animals.save()
    res.status(201).json(newAnimals)
})

module.exports = router