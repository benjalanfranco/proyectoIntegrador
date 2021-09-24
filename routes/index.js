var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController')

<<<<<<< HEAD
router.get('/', indexController.index);
=======
router.get('/index', indexController.index);
>>>>>>> 5fa5f8374b0eec86cad75952811bdec324411b1f

module.exports = router;
