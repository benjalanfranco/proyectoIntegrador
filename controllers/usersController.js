const usersController = {
    usuario: function(req, res, next) {
      res.render('miPerfil', { title: 'Express' });
    },
    detalleUsuario: function(req, res, next) {
        res.render('detalleUsuario', { title: 'Express' });
    },
    agregar: function(req, res, next) {
        res.render('agregarPost', { title: 'Express' });
    },
    detallePost: function(req, res, next) {
        res.render('detallePost', { title: 'Express' });
    },
    editarPerfil: function(req, res, next) {
        res.render('editarPerfil', { title: 'Express' });
    }

  }
  
  module.exports = usersController;