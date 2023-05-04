const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Título de Teste'
    })
})

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
})

router.post('/register/new', (req, res) => {
    // CONTROLLER
    res.send('Ok, funcionou')
})

module.exports = router