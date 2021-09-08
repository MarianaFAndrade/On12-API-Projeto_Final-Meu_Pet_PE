const express = require('express')
const router = express.Router()
const controller = require('../controllers/animalsControllers')

router.get('/', controller.getAll)
router.post('/', controller.createAnimals)

module.exports = router