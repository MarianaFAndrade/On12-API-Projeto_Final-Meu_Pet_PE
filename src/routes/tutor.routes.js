const express = require('express')
const router = express.Router()
const controller = require('../controllers/tutorControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.createTutor)
router.patch('/:id', controller.updateTutorById)
router.delete('/delete/:id', controller.deletarTutorById)

module.exports = router