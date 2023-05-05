const mongoose = require('mongoose')

// setting collection squema
const schema = new mongoose.Schema({
    nome: String,
    idade: Number,
    email: String,
    senha: String
})

const Model = mongoose.model('clientes', schema)

module.exports = {Model}

// inserting a new instance in "Model"
/* const register = new Model({
    nome: 'Renard',
    idade: 30,
    email: 'renardrock@gmail.com',
    password: 'fla010892'
})

register.save() */