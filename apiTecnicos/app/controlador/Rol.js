const  mongoose  = require('mongoose')
const Rol  = require('../modelo/Rol')

exports.getRol = (req, res) =>{
    Rol.find({},(err, docs) => {
        res.send({
            docs: docs,
            msj: 'roles exitp'
        })
    })
}