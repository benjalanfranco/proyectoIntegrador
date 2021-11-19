var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController')

router.get('/miPerfil', usersController.miPerfil);


router.get('/editarPerfil', usersController.editarPerfil);
<<<<<<< HEAD
router.get('/detalleUsuario/:idUsuario', usersController.detalleUsuario);
router.get('/login', usersController.login);
=======


router.get('/:usuario', usersController.detalleUsuario);


router.get('/login', usersController.login);


router.get('/registracion', usersController.registrarse);
>>>>>>> b7e7022dc04b0bb9afe5661b4ae3556735734209




module.exports = router;

