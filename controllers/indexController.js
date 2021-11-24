const db = require('../database/models');
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs')

const indexController = {
  index: function(req, res, next) {
    db.Post.findAll({include: [{ association:'user' }]})
      .then((posts) => { //posts va a ser tipo data, es donde me mete el resultado de la promesa.
        res.render('index', { posts });
      })
      .catch((error) => {
        res.send(error)  //es como console.log. Me va a mostrar el error en el medio de la pantalla.
      })
  },
  registro: function(req, res, next) {
    res.render('registracion');
  },
  guardar: function(req, res, next) {
    if(req.file) req.body.foto_perfil = (req.file.destination + req.file.filename).replace('public', '')
    db.User.create(req.body)
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
        if (user.contrasena == req.body.contrasena){
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
