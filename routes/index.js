var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const userValidation = require('../validations/userValidation');


/* / */
router
    .get('/',  indexController.index)
    .post('/', userValidation, indexController.indexCreate)


module.exports = router;
