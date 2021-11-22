const db = require('../database/models');
const op = db.Sequelize.Op;

const indexController = {
  index: function(req, res, next) {
    db.Post.findAll()
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
    db.User.create(req.body)
    .then((post) => {
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
          return res.redirect('/login')
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
