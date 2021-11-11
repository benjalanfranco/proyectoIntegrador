const db = require('../database/models');

const usersController = {
    miPerfil: function(req, res, next) {
      res.render('miPerfil', { title: 'Express' });
    },
    detalleUsuario: function(req, res, next) {
     
      db.User.findByPk(req.params.usuario)
      .then((user) => {
        
        db.Post.findAll({ where: idUsuario = req.params.usuario})
        .then((post) => {
          res.render('detalleUsuario', { user, post });
        })
        .catch((error) => {
          res.render(error)
        });
      })
      .catch((error) => {
        res.render(error)
      })       
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