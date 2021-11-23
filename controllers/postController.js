const db = require('../database/models');

const postController = {
    detallePost: function(req, res, next) {

      db.Post.findByPk(req.params.id)
      .then((post) => {
        if (!post){
          return  res.render('error')
        }

        db.Comment.findAll({ where: {idPost: req.params.id}, include: [{ association:'user' }] })
        .then((comments) => {
          res.render('detallePost', {post, comments});
        })
        .catch((error) => {
          res.render(error)
        });
      })
      .catch((error) => {
        res.render(error)
      });  
    },
    publicar: function(req, res, next) {
      res.render('agregarPost');
    },
    guardar: function(req, res, next) {
      if(req.file) req.body.imagen = (req.file.destination + req.file.filename).replace('public', '')
      db.Post.create({
        imagen: req.body.imagen,
        descripcion: req.body.descripcion,
        idUsuario: req.session.usuarioLog.id
      }).then((post)=> {
        res.redirect('/');
      }).catch((error) => {
        return res.render(error)
      })  
    },
    editar: function(req, res, next) {
      if(req.file) req.body.imagen = (req.file.destination + req.file.filename).replace('public', '')

      db.Post.findByPk(req.params.id)
      .then((post) => {
        if (!post){
          return  res.render('error')
        }
        res.render('editarPost', {post})
      })
      .catch((error) => {
        res.render(error)
      }); 
    },
    actualizar: function(req, res, next) {
      db.Post.update({
        descripcion: req.body.descripcion
      }, {where: {id: req.params.id}})
      .then(()=> {
        res.redirect('/');
      }).catch((error) => {
        return res.render(error)
      })  
    },
    eliminar: function(req, res, next) {
      db.Post.destroy({where: {id: req.params.id}})
      .then(()=> {
        res.redirect('/');
      }).catch((error) => {
        return res.render(error)
      })  
    },
    comentar: function(req, res, next) {
      if (req.session.usuarioLog == undefined){
        res.redirect('/post/'+req.params.id);
      }
      db.Comment.create({
        idPost: req.params.id,
        idUsuario: req.session.usuarioLog.id,
        comentario: req.body.comentario,
      }).then((post)=> {
        res.redirect('/post/'+req.params.id);
      }).catch((error) => {
        return res.render(error)
      })  
    },
}
  module.exports = postController;
  