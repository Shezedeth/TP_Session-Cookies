var express = require('express');
var router = express.Router();
const userLoginController = require('../controllers/userLoginController');


/* /userLogin */
router
    .get('/', userLoginController.userLogin)
    .get('/logut', userLoginController.logout)
    
module.exports = router