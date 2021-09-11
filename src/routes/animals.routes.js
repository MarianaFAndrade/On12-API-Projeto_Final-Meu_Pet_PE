const express = require('express')
const router = express.Router()
const controller = require('../controllers/animalsControllers')

router.get('/allAnimals', controller.getAll)
router.get('/bairro', controller.getAllAnimalsForShelterNeighborhood)
router.get('/:id', controller.getById)
router.get('/shelter/:id', controller.getAllAnimalsShelter)
router.post('/create', controller.createAnimals)
router.delete('/delete/:id', controller.deletarAnimalById)
router.patch('/update/:id', controller.updateAnimalById)

module.exports = router