const db = require('../database/models');

const usersController = {
    miPerfil: function(req, res, next) {
      res.render('miPerfil', { title: 'Express' });
    },
    detalleUsuario: function(req, res, next) {
     
      db.User.findByPk(req.params.usuario)
      .then((user) => {
        
        db.Post.findAll({ where: {idUsuario: req.params.usuario}})
        .then((posts) => {
          return res.render('detalleUsuario', { user, posts });
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
}
  
  module.exports = usersController;