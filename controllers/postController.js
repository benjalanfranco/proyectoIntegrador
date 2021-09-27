const posts = require ('../data/posts');

const postController = {
    detallePost: function(req, res, next) {
      let post = posts.findById(req.params.id)
      if (post){
      res.render('detallePost', {post}); 
      }
    },
    agregar: function(req, res, next) {
      res.render('agregarPost', { title: 'Express' });
  },
}
  module.exports = postController;
  