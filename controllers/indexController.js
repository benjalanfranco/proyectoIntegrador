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
    })
  },
  resultados: function(req, res, next) {

    db.Post.findAll({
        where: [
          {descripcion: {[op.like]: "%req.query.criteria%"}}
        ] 
    }) .then((posts)=> {
    res.render('resultadoBusqueda', { posts, criteria: req.query.criteria })
    })
    .catch((error) => {
    res.render(error)
    });
  }
}

module.exports = indexController;
