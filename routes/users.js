var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController')

router.get('/', usersController.usuario);
router.get('/detalleUsuario', usersController.detalleUsuario);
router.get('/agregarPost', usersController.agregar);
router.get('/detallePost', usersController.detallePost);
router.get('/editarPerfil', usersController.editarPerfil);

module.exports = router;

