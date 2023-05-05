const router = require('express').Router()

const {addNewCustomer} = require('../controllers/customers')

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

router.post('/register/new', addNewCustomer)

module.exports = {router}