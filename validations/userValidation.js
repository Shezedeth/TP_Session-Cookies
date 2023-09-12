const {check} = require('express-validator') 
module.exports = [  
    check('name')
        .notEmpty().withMessage('Coloque un nombre'),
    check('email')
        .notEmpty().withMessage('Ingrese su email').isEmail().withMessage('Tiene que ser un email'),
    check('age')
        .notEmpty().withMessage('Ingrese su edad').isInt().withMessage('Solo puede utilizar numeros'),
    check('color')
        .notEmpty().withMessage('Elija un color por favor')
    ]

