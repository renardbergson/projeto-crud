const router = require('express').Router()

const IndexController = require('../controllers/index')
const CustomersController = require('../controllers/customers')

// home
router.get('/', IndexController.index)

// register
router.get('/register', CustomersController.index)
router.post('/register', CustomersController.add)

// list users
router.get('/list', CustomersController.list)

// edit users
router.get('/edit', CustomersController.formEdit)
//router.post('/edit', CustomersController.edit)

module.exports = {router}