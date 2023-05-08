const router = require('express').Router()

const IndexController = require('../controllers/index')
const CustomersController = require('../controllers/customers')

// home
router.get('/', IndexController.index)

// register
router.get('/register', CustomersController.index)
router.post('/register/add', CustomersController.add)

// list users
router.get('/listUsers', CustomersController.listUsers)

module.exports = {router}