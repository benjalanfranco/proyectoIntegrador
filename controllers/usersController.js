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
      db.User.findByPk(req.params.id)
      .then((user) => {
        if (!user){
          return  res.render('error')
        }
        res.render('editarPerfil', {user})
      })
      .catch((error) => {
        res.render(error)
      }); 
    },
    actualizar: function(req, res, next) {
      if(req.file) req.body.foto_perfil = (req.file.destination + req.file.filename).replace('public', '')
      db.User.update(req.body, {where: {id: req.params.id}})
      .then(()=> {
        res.redirect('/');
      }).catch((error) => {
        return res.render(error)
      })  
    }
}
  
  module.exports = usersController;