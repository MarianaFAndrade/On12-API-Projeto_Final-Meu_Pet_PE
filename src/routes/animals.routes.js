const express = require('express')
const router = express.Router()
const controller = require('../controllers/animalsControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getFindById)
// router.get('/bairro', controller.getAllAnimalsBairro)
router.post('/', controller.createAnimals)
router.delete('/delete', controller.deletarAnimal)
router.patch('/:id', controller.updateAnimalById)
router.get('/shelter/:id', controller.getAllAnimalsShelter)

module.exports = router