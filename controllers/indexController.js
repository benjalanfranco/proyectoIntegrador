const db = require('../database/models');

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
  resultados: function (req, res, next) {
    res.render('resultadoBusqueda', { criteria: req.query.buscador })
  },
}

module.exports = indexController;
