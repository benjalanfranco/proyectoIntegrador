var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({dest: 'public/images/'})

let indexController = require('../controllers/indexController')

router.get('/', indexController.index);

router.get('/registracion', indexController.registro);
router.post('/registracion', upload.single('foto_perfil'), indexController.guardar);

router.all('/login', indexController.login);
router.all('/logout', indexController.logout)

router.get('/resultados', indexController.resultados);


module.exports = router;
