const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        "tittle": "on12-api-final-meu-pet-pe",
        "version": "1.0.0",
        "mensagem": "API voltada para juntar anjinhos desabrigados com seus tutores"
    });
})

module.exports = router