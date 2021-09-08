const express = require('express')
const router = express.Router()
const controller = require('../controllers/tutorControllers')

router.get('/', controller.getAll)
router.post('/', controller.createTutor)

module.exports = router