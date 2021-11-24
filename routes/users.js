var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({dest: 'public/images/'})

let usersController = require('../controllers/usersController')

router.get('/miPerfil', usersController.miPerfil);

router.get('/editarPerfil', usersController.editarPerfil);
router.post('/editarPerfil', upload.single('foto_perfil'), usersController.editarPerfil);

router.get('/detalleUsuario/:id', usersController.detalleUsuario);





module.exports = router;

