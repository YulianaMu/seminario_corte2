const express = require('express')
const iniDB = require('../db/db')
const app = express()
const port =3001
const usuarioRuta = require('../app/rutas/usuario')
const RolRuta = require('../app/rutas/Rol')
const PublicacionRuta = require('../app/rutas/Publicacion')
const cors = require('cors')
const cargarDatos = require('../app/lib/cargaInicial')
app.use(cors())
cargarDatos();

app.use(
    express.json({
        limit: '20mb'
    })
)
//esta linea de coigo es para entener los atos que vengan e un formularios ya sea json Xml  text u otros todo esto lo hace a travez del mectodo urlencoded
app.use(
    express.urlencoded({
        limit: '20mb',
        extended: true
    })
)

app.use(usuarioRuta)
app.use(RolRuta)
app.use(PublicacionRuta)

app.listen(port, ()=>{
    console.log('la app esta en linea ')
})

iniDB();

app.get('/', (req, res) =>{
    res.send('iniciamos api con exito')
})

