const express = require('express')
const mongoose = require('mongoose')
const Tutor = require('../models/tutor')

const getAll = async (req, res) => {
    const tutor = await Tutor.find()
    res.json(tutor)
};

const getById = async (req, res) => {
    const tutorId = await Tutor.findById(req.params.id);
    res.status(200).json(tutorId);
};

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
};

const updateTutorById = async (req, res) => {
    try {
        const tutores = await Tutor.findById(req.params.id)

        if (tutores == null) {
            return res.status(404).json({ message: "Tutor não encontrado" })
        }
        if (req.body.nome != null) {
            tutores.nome = req.body.nome
        }
        if (req.body.endereco != null) {
            tutores.endereco = req.body.endereco
        }
        if (req.body.bairro != null) {
            tutores.bairro = req.body.bairro
        }
        if (req.body.telefone != null) {
            tutores.telefone = req.body.telefone
        }
        if (req.body.email != null) {
            tutores.email = req.body.email
        }
        const updateTutorById = await tutores.save()
        res.status(200).json(updateTutorById)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

const deletarTutorById = async (req, res) => {
    const tutorDelete = await Tutor.findById(req.params.id);
    if (tutorDelete == null) {
      return res.status(404).json({ message: "Abrigo não encontrado." });
    }
    try {
      await tutorDelete.remove();
      res.status(200).json({ message: "Abrigo excluído com sucesso." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    getAll,
    getById,
    createTutor,
    updateTutorById,
    deletarTutorById
    
}