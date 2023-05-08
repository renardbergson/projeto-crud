function index (req, res) {
    res.render('index', {
        title: 'Título de Teste'
    })
}

module.exports = {index}