const db = require('../database/models');

const postController = {
    detallePost: function(req, res, next) {

      db.Post.findByPk(req.params.id)
      .then((post) => {
        if (!post){
          return  res.render('error')
        }

        db.Comment.findAll({ where: {idPost = req.params.id} } )
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
    agregar: function(req, res, next) {
      res.render('agregarPost', { title: 'Express' });
  },
}
  module.exports = postController;
  