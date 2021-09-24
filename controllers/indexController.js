const indexController = {
  index: function(req, res, next) {
    res.render('index', { title: 'Express' });
  },
  login: function(req, res, next) {
    res.render('login', { title: 'Express' });
  },
  registrarse: function(req, res, next) {
    res.render('registracion', { title: 'Express' });
  }
}

module.exports = indexController;
