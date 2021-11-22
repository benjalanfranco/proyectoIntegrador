const db = require('../database/models');

const usersController = {
    miPerfil: function(req, res, next) {
      res.render('miPerfil', { title: 'Express' });
    },
    detalleUsuario: function(req, res, next) {
     
      db.User.findByPk(req.params.id)
      .then((user) => {
        
        db.Post.findAll({ where: {id: req.params.id}})
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
}
  
  module.exports = usersController;