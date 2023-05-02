const express = require('express')
const path = require('path')

const app = express()

// setting template engine and view files path
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// setting public files path
app.use(express.static(path.join(__dirname, 'public')))

// enabling server to get data from POST method (formulary)
app.use(express.urlencoded({ extended: true }))

// routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Título de Teste'
    })
})


// 404 error
app.use((req, res) => { // middleware
    res.send('Ops, página não encontrada!')
})

// setting and getting data from server
console.log(__dirname)
const port = process.env.PORT || 8080 
app.listen(port, () => console.log(`Server is listening on port ${port}`)) 