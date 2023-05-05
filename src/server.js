// showing server folder path
console.log(__dirname)

// requiring modules
const express = require('express')
const path = require('path')

const db = require('./database')
const {router} = require('./routes')

// setting app
const app = express()

// calling database connection function
db.connect()

// setting template engine and view files path
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// setting public files path
app.use(express.static(path.join(__dirname, 'public')))

// enabling server to get data from POST method (formulary)
app.use(express.urlencoded({ extended: true }))

// getting routes from router module
app.use('/', router)

// 404 error
app.use((req, res) => { // middleware
    res.send('Ops, página não encontrada!')
})

// setting and getting data from server
const port = process.env.PORT || 8080 
app.listen(port, () => console.log(`Server is listening on port ${port}`)) 