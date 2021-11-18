var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController')

router.get('/miPerfil', usersController.miPerfil);


router.get('/editarPerfil', usersController.editarPerfil);


router.get('/:usuario', usersController.detalleUsuario);


router.get('/login', usersController.login);


router.get('/registracion', usersController.registrarse);




module.exports = router;

