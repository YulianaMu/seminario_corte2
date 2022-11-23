const mongoose = require('mongoose')

const comentarioScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        title: {
            type: String,
            unique: true,
            required: true
        },
        description: {
            type: String
        }
    },{
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('Comentario', comentarioScheme)