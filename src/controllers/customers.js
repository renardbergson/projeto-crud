const {Model} = require('../models/clientes')
const {crypto} = require('../utils/password')

function index (req, res) {
    res.render('register', {
        title: 'Cadastro de Clientes'
    })
}

async function add (req, res) {
    // gettind data from form
    const {
        name, 
        age, 
        email, 
        password
    } = req.body

    // calling bcrypt function
    const cryptoPassword = await crypto(password)

    // inserting data in the required object
    const register  = new Model ({
        nome: name,
        idade: age,
        email: email,
        senha: cryptoPassword
    }) 

    // saving data
    register.save()

    res.send('Cadastro realizado com sucesso!')
}

function listUsers (req, res) {
    res.render('listUsers', {
        title: 'Lista de Clientes',
        users: []
    })
}

module.exports = {
    index,
    add,
    listUsers
}