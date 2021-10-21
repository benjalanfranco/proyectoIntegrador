const posts = require ('../data/posts');
const users = require ('../data/users');

const usersController = {
    miPerfil: function(req, res, next) {
      res.render('miPerfil', { title: 'Express' });
    },
    detalleUsuario: function(req, res, next) {
        let user = users.findByUsername(req.params.usuario);
        let post = posts.findByUsername(req.params.usuario);
        if (user) {
            res.render('detalleUsuario', { user, post });
        }
    },
    editarPerfil: function(req, res, next) {
        res.render('editarPerfil', { title: 'Express' });
    },
    login: function(req, res, next) {
        res.render('login', { title: 'Express' });
      },
    registrarse: function(req, res, next) {
        res.render('registracion', { title: 'Express' });
      }
}
  
  module.exports = usersController;