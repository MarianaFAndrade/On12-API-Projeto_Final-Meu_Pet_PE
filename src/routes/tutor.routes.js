const express = require('express')
const router = express.Router()
const controller = require('../controllers/tutorControllers')

router.get('/allTutors', controller.getAll)
router.get('/:id', controller.getById)
router.post('/create', controller.createTutor)
router.patch('/update/:id', controller.updateTutorById)
router.delete('/delete/:id', controller.deletarTutorById)

module.exports = router