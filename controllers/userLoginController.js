module.exports = {
    userLogin: (req,res) => {
        res.render('userLogin',{
            title: "Usuario logeado",
            session: req.session
        })
    },
    logout: (req,res) => {
        req.session.destroy()
        res.cookie('RecordarColor', null,{
            maxAge: -1
        })
        res.redirect('/')
    }
}