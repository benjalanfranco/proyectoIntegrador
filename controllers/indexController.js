const posts = require('../data/posts')

const indexController = {
  index: function(req, res, next) {
    res.render('index', { posts: posts.lista});
  },
  login: function(req, res, next) {
    res.render('login', { title: 'Express' });
  },
  registrarse: function(req, res, next) {
    res.render('registracion', { title: 'Express' });
  },
  resultados: function (req, res, next) {
    res.render('resultadoBusqueda', { title: 'Express' })
  },
}

module.exports = indexController;
