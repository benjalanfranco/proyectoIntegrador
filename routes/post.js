var express = require('express');
var router = express.Router();

let postController = require('../controllers/postController')

router.get('/agregarPost', postController.agregar);
router.get('/:id', postController.detallePost);



module.exports = router;
