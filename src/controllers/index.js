function index (req, res) {
    res.render('index', {
        title: 'Página Inicial',
        subtitle: 'Seja bem-vindo ao projeto Crud'
    })
}

module.exports = {index}