var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({dest: 'public/images/'})

let usersController = require('../controllers/usersController')

router.get('/miPerfil', usersController.miPerfil);

router.get('/:id/editarPerfil', usersController.editarPerfil);
router.post('/:id/editarPerfil', upload.single('foto_perfil'), usersController.actualizar);

router.get('/detalleUsuario/:id', usersController.detalleUsuario);





module.exports = router;

