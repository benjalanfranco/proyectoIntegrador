var express = require('express');
var router = express.Router();
const multer = require('multer')
const upload = multer({dest: 'public/images/'}) //con esta linea simplifico toda la configurada de multer.

let postController = require('../controllers/postController')

router.get('/agregarPost', postController.publicar);
router.post('/agregarPost', upload.single('imagen'), postController.guardar);

router.get('/:id', postController.detallePost);
router.post('/:id', postController.comentar);

router.get('/:id/editarPost', postController.editar);
router.post('/:id/editarPost', upload.single('imagen'), postController.actualizar);


router.post('/:id/eliminarPost', postController.eliminar);


module.exports = router;
