var express = require('express');
var router = express.Router();

let postController = require('../controllers/postController')

router.get('/', postController.detallePost);


module.exports = router;