const postController = {
    detallePost: function(req, res, next) {
      res.render('detallePost', { title: 'Express' });
    }
  }
  
  module.exports = postController;
  