const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({
        "tittle": "on12-api-final-meu-pet-pe",
        "version": "1.0.0",
        "mensagem": "Bem-vinde a API Meu PET PE, uma API voltada para juntar anjinhos desabrigados com seus novos tutores"
    });
})

module.exports = router