const mongoose = require('mongoose')
const Shelter = require('../models/shelter')

const getAll = async (req, res) => {
    const shelter = await Shelter.find()
    res.json(shelter)
};

const getById = async (req, res) => {
    const shelterId = await Shelter.findById(req.params.id);
    res.status(200).json(shelterId);
};

const getAllShelterForNeighborhood = async (req, res) => {
    const abrigosPorBairro = await Animals.find().populate("bairro");
    const abrigosPorBairroFiltrados = abrigosPorBairro.filter(
      (animal) => animal.bairro == req.body.bairro
    );
    res.json(abrigosPorBairroFiltrados);
  };

const createShelter = async (req, res) => {
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
};

const updateShelterById = async (req, res) => {
    try {
        const abrigo = await Shelter.findById(req.params.id)

        if (abrigo == null) {
            return res.status(404).json({ message: "Abrigo não encontrado" })
        }
        if (req.body.nome != null) {
            abrigo.nome = req.body.nome
        }
        if (req.body.endereco != null) {
            abrigo.endereco = req.body.endereco
        }
        if (req.body.bairro != null) {
            abrigo.bairro = req.body.bairro
        }
        if (req.body.telefone != null) {
            abrigo.telefone = req.body.telefone
        }
        const shelterAtualizado = await abrigo.save()
        res.status(200).json(shelterAtualizado)

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

const deletarsShelterById = async (req, res) => {
    const shelterDelete = await Shelter.findById(req.params.id);
    if (shelterDelete == null) {
      return res.status(404).json({ message: "Abrigo não encontrado." });
    }
    try {
      await shelterDelete.remove();
      res.status(200).json({ message: "Abrigo excluído com sucesso." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAll,
    getById,
    getAllShelterForNeighborhood,
    createShelter,
    updateShelterById,
    deletarsShelterById
}