const express = require('express')

const Rol = require('../controlador/Rol')

const router = express.Router()

const path = 'rol'

router.get(
      `/${path}`,
      Rol.getRol
)

module.exports = router