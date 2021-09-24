const indexController = {
  index: function(req, res, next) {
    res.render('index', { title: 'Express' });
  },
  login: function(req, res, next) {
    res.render('login', { title: 'Express' });
  }
}

module.exports = indexController;
