const express = require('express')
const router = express.Router()
const controller = require('../controllers/tutorControllers')

router.get('/', controller.getAll)
router.post('/', controller.createTutor)
router.patch('/:id', controller.updateTutorById)

module.exports = router