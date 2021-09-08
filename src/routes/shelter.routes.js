const express = require('express')
const router = express.Router()
const controller = require('../controllers/shelterControllers')


router.get('/', controller.getAll)
router.post('/', controller.createShelter)

module.exports = router