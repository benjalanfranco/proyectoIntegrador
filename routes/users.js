var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController')

router.get('/miPerfil', usersController.miPerfil);

router.get('/editarPerfil', usersController.editarPerfil);

router.get('/detalleUsuario/:id', usersController.detalleUsuario);





module.exports = router;

