var express = require('express');
var router = express.Router();

let postController = require('../controllers/postController')

router.get('/:id', postController.detallePost);
router.get('/agregarPost', postController.agregar);


module.exports = router;
