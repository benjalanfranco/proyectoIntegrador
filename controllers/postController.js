const db = require('../database/models');

const postController = {
    detallePost: function(req, res, next) {

      db.Post.findByPk(req.params.id)
      .then((post) => {
        if (!post){
          return  res.render('error')
        }

        db.Comment.findAll({ where: {idPost: req.params.id} } )
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
      res.render('agregarPost', { title: 'Express' });
    },
    guardar: function(req, res, next) {
      db.Post.create({
        descripcion: req.body.descripcion
      }).then((post)=> {
        res.redirect('/');
      }).catch((error) => {
        return res.render(error)
      })  
    },
    editar: function(req, res, next) {
      
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
      .then((post)=> {
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
}
  module.exports = postController;
  