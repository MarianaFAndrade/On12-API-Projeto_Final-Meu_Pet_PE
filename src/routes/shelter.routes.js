const express = require('express')
const router = express.Router()
const controller = require('../controllers/shelterControllers')

router.get('/allShelters', controller.getAll)
router.get('/:id', controller.getById)
router.get('/bairro', controller.getAllShelterForNeighborhood)
router.post('/create', controller.createShelter)
router.patch('/update/:id', controller.updateShelterById)
router.delete('/delete/:id', controller.deletarsShelterById)

module.exports = router