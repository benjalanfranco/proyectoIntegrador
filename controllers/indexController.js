const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs')

const indexController = {
  index: function(req, res, next) {
    db.Post.findAll({include: [{ association:'user' }]})
      .then((posts) => { 
        res.render('index', { posts });
      })
      .catch((error) => {
        res.send(error)
      })
  },
  registro: function(req, res, next) {
    res.render('registracion');
  },
  guardar: function(req, res, next) {
    if(req.file) req.body.foto_perfil = (req.file.destination + req.file.filename).replace('public', '')
    req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 10);
    db.User.create(req.body) //gracias a express-generator capturamos la info como un objeto
    .then((user) => {
      res.redirect('/login');
    }).catch((error) => {
      res.render(error)
      });
  },
  login: function(req, res, next) {
    if (req.method == 'POST') {
      db.User.findOne({where: {usuario: req.body.usuario}})
      .then((user)=> {
        if (!user) {
          return res.send('No existe ese usuario')
        }
        if (bcrypt.compareSync(req.body.contrasena, user.contrasena)){
          req.session.usuarioLog = user;          
          res.cookie('usuario', user, {maxAge: 100 * 60 * 60 * 24 * 3})
          return res.redirect('/')
        } else {
          return res.send('La contraseña es incorrecta')
        }
      }).catch((error) => {
        res.render(error)
        });
    } else {
      return res.render('login')
    }
  },
  logout: function (req,res, next) {
    res.clearCookie('usuario');
    req.session.usuarioLog = null;
    res.redirect('/');
  },

  resultados: function(req, res, next) {

    db.Post.findAll({ where: 
      {descripcion: {[op.like]: "%"+req.query.buscador+"%"}}

    }) .then((posts)=> {
    res.render('resultadoBusqueda', { posts, buscador: req.query.buscador })
    })
    .catch((error) => {
    res.render(error)
    });
  }
}

module.exports = indexController;
