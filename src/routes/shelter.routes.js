const express = require('express')
const router = express.Router()
const controller = require('../controllers/shelterControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.get('/bairro', controller.getAllShelterForNeighborhood)
router.post('/', controller.createShelter)
router.patch('/:id', controller.updateShelterById)
router.delete('/delete/:id', controller.deletarsShelterById)

module.exports = router