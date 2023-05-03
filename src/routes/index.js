const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Título de Teste'
    })
})

module.exports = router