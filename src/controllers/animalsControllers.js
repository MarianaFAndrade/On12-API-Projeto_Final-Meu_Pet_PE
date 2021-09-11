const mongoose = require("mongoose");
const Animals = require("../models/animals");

const getById = async (req, res) => {
  const animaisId = await Animals.findById(req.params.id);
  res.status(200).json(animaisId);
};

const getAll = async (req, res) => {
    const animals = await Animals.find().populate("abrigo");
    res.json(animals);
};

const getAllAnimalsShelter = async (req, res) => {
  const animaisPorAbrigo = await Animals.find().populate("abrigo");
  const animaisPorAbrigosFiltrados = animaisPorAbrigo.filter(
    (abrigos) => abrigos.abrigo.id == req.params.id
  );
  res.json(animaisPorAbrigosFiltrados);
};

const getAllAnimalsForShelterNeighborhood = async (req, res) => {
  const animaisPorBairro = await Animals.find().populate("bairro");
  const animaisPorBairroFiltrados = animaisPorBairro.filter(
    (animal) => animal.bairro == req.query.bairro
  );
  res.json(animaisPorBairroFiltrados);
};

const createAnimals = async (req, res) => {
  const createAnimals = new Animals({
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
  });
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
  });

  if (animalsJaExiste) {
    return res.status(409).json({ error: "Animal já cadastrado" });
  }

  try {
    const newAnimals = await createAnimals.save();
    res.status(201).json(newAnimals);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateAnimalById = async (req, res) => {
  try {
    const animais = await Animals.findById(req.params.id);

    if (animais == null) {
      return res.status(404).json({ message: "Animal não encontrado" });
    }
    if (req.body.nome != null) {
      animais.nome = req.body.nome;
    }
    if (req.body.especie != null) {
      animais.especie = req.body.especie;
    }
    if (req.body.sexo != null) {
      animais.sexo = req.body.sexo;
    }
    if (req.body.idade != null) {
      animais.idade = req.body.idade;
    }
    if (req.body.porte != null) {
      animais.porte = req.body.porte;
    }
    if (req.body.castrado != null) {
      animais.castrado = req.body.castrado;
    }
    if (req.body.abrigo != null) {
      animais.abrigo = req.body.abrigo;
    }
    if (req.body.bairro != null) {
      animais.bairro = req.body.bairro;
    }
    if (req.body.status != null) {
      animais.status = req.body.status;
    }
    const animalAtualizado = await animais.save();
    res.status(200).json(animalAtualizado);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deletarAnimalById = async (req, res) => {
  const animalsDelete = await Animals.findById(req.params.id);
  if (animalsDelete == null) {
    return res.status(404).json({ message: "Animal não encontrado." });
  }
  try {
    await animalsDelete.remove();
    res.status(200).json({ message: "Animal excluído com sucesso." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getById,
  getAll,
  getAllAnimalsShelter,
  getAllAnimalsForShelterNeighborhood,
  createAnimals,
  updateAnimalById,
  deletarAnimalById,
};
