const { Router } = require('express')
const { createTipoEquipo, getTipoEquipos, updateTipoEquipos } = require('../controllers/tipoEquipo')

const router = Router()

// crear
router.post('/', createTipoEquipo)

// editar
// router.put('/', updateTipoEquipos)

// listar
router.get('/', getTipoEquipos)

module.exports = router