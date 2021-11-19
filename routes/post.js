var express = require('express');
var router = express.Router();

let postController = require('../controllers/postController')

router.get('/agregarPost', postController.publicar);
router.post('/agregarPost', postController.guardar);

router.get('/:id', postController.detallePost);

router.get('/:id/editarPost', postController.editar);
router.post('/:id/editarPost', postController.actualizar);

router.post('/:id/eliminarPost', postController.eliminar);


module.exports = router;
