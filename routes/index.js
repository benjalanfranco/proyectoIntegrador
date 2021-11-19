var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController')

router.get('/', indexController.index);

router.get('/registracion', indexController.registro);
router.post('/registracion', indexController.guardar);

router.get('/resultados', indexController.resultados);


module.exports = router;
