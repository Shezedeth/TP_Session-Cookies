const {validationResult} = require('express-validator');

module.exports = {
    index: (req, res) => {
        res.render('index', { 
            title: 'Index',
            session: req.session
        });
    },
    indexCreate: (req,res) => {
        const errors = validationResult(req)
        if(errors.isEmpty()){
            const name = req.body.name
            const email = req.body.email
            const age = req.body.age
            const color = req.body.color
            
            req.session.usuario = {
                name,
                email,
                age,
                color
            }
            req.body.recordarColor !== undefined && res.cookie('RecordarColor', req.session.usuario,{
                maxAge: 1000 * 60
            })
            res.redirect('/')
        }else{
            return res.render('index',{
                title: 'Index',
                session: req.session,
                errors: errors.mapped(),
                old: req.body
            })
        }
       
    }
}
