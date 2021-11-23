const db = require('../database/models');

const usersController = {
    miPerfil: function(req, res, next) {
      if (!req.session.usuarioLog){
        res.send('No estas logueado')
      }
     
      db.User.findByPk(req.session.usuarioLog.id, {include: [{association:'posts'}]})
      .then((user) => {
        return res.render('miPerfil', { user});
      })
      .catch((error) => {
        res.render(error)
      })       
    },
    detalleUsuario: function(req, res, next) {
     
      db.User.findByPk(req.params.id, {include: [{association:'posts'}]})
      .then((user) => {
        return res.render('detalleUsuario', { user});
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