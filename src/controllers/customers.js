const {Model} = require('../models/clientes')

function addNewCustomer (req, res) {
    // gettind data from form
    const {
        name, 
        age, 
        email, 
        password
    } = req.body

    // inserting data in the required object
    const register  = new Model ({
        nome: name,
        idade: age,
        email: email,
        senha: password
    }) 

    // saving data
    register.save()

    res.send('Cadastro realizado com sucesso!')
}

module.exports = {addNewCustomer}