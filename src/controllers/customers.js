const {Model} = require('../models/clientes')
const {crypto} = require('../utils/password')

async function addNewCustomer (req, res) {
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

module.exports = {addNewCustomer}