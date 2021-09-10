const express = require('express')
const router = express.Router()
const controller = require('../controllers/animalsControllers')

router.get('/', controller.getAll)
router.get('/bairro', controller.getAllShelterForneighborhood)
router.get('/:id', controller.getById)
router.get('/shelter/:id', controller.getAllAnimalsShelter)
router.post('/', controller.createAnimals)
router.delete('/delete/:id', controller.deletarAnimalById)
router.patch('/:id', controller.updateAnimalById)

module.exports = router