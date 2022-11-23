const mongoose = require('mongoose')

const usuarioScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        mail: {
            type: String,
            unique: true,
            required: true
        },
        nameUser: {
            type: String
        },
        password:{
            type: String
        },
        rol:{
            type: String
        }
    },{
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('usuarioss', usuarioScheme)