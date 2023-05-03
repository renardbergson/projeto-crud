// using mongoose to connect to database (mongoDB)
const mongoose = require('mongoose')

function connect () {
    mongoose.connect('mongodb://localhost:27017/projeto-crud')
    const db = mongoose.connection
    db.once('open', () => console.log('connected to database!'))
    db.on('error', console.error.bind(console, 'connection error: '))
}

module.exports = {connect}