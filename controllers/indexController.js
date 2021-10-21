const comments = require('../data/comments');
const posts = require('../data/posts')

const indexController = {
  index: function(req, res, next) {
    res.render('index', { posts: posts.lista, comments: comments.lista});
  },
  resultados: function (req, res, next) {
    res.render('resultadoBusqueda', { criteria: req.query.buscador })
  },
}

module.exports = indexController;
