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

async function formEdit (req, res) {
    // getting the id sent by GET method 
    const { id } = req.query

    // looking for user by ID (this is an async function)
    const user = await Model.findById(id)

    res.render('edit', {
        title: 'Editar Cliente',
        // sending user data to the view
        user: user
    })
} 

async function edit (req, res) {
    const {
        name, 
        age, 
        email
    } = req.body

    // gettind the param sent by POST method
    const { id } = req.params

    // looking for user by ID (this is an async function)
    const user = await Model.findById(id)

    // overwriting data with new data
    user.nome = name
    user.idade = age
    user.email = email

    user.save()
    
    res.render('edit', {
        title: 'Editar Cliente',
        message: 'Usuário alterado com sucesso!'
    })
}

async function remove (req, res) {
    // receiving user ID from param
    const { id } = req.params
    
    // choosing user to remove (this is an async function)
    const remove = await Model.deleteOne({_id: id})

    if (remove) {
        console.log(remove)
        res.redirect('/list')
    }
}

module.exports = {
    index,
    add,
    list,
    formEdit,
    edit,
    remove
}