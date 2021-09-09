const express = require('express')
const router = express.Router()
const controller = require('../controllers/shelterControllers')

router.get('/', controller.getAll)
router.post('/', controller.createShelter)
router.patch('/:id', controller.updateShelterById)

module.exports = router