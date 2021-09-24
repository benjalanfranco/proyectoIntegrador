var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController')

router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/registracion', indexController.registrarse);

module.exports = router;
