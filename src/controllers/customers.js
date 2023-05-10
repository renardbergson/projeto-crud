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

    res.render('register', {
        title: 'Cadastro de Clientes',
        message: 'Cadastro realizado com sucesso!'
    })
}

async function list (req, res) {
    // mongoose user listing method
    const users = await Model.find()

    res.render('list', {
        title: 'Lista de Clientes',
        users: users
    })
}

function formEdit (req, res) {
    res.render('edit', {
        title: 'Editar Cliente'
    })
} 

module.exports = {
    index,
    add,
    list,
    formEdit
}