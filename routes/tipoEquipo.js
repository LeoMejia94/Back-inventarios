const { Router } = require('express')
const { 
    createTipoEquipo, 
    getTiposEquipo, 
    getTipoEquipoByID,
    updateTipoEquipoByID,
    deleteTipoEquipoByID
} = require('../controllers/tipoEquipo')
const validarJwt = require('../middlewares/validarJwt')
const { esAdmin } = require('../middlewares/validarRol')


const router = Router()

/**
 * Crea un tipo de equipo
 */
router.post('/', [validarJwt,
    esAdmin], createTipoEquipo)

/**
 * Consulta todos los tipos de equipo
 */
router.get('/', [validarJwt,
    esAdmin],  getTiposEquipo)

/**
 *  Consulta un tipo de equipo por su ID
 */
router.get('/:id', [validarJwt,
    esAdmin], getTipoEquipoByID)

/**
 * Actualiza un tipo de equipo por su ID
 */
router.put('/:id', [validarJwt,
    esAdmin], updateTipoEquipoByID)

/**
 * Borra un tipo de equipo por su ID
 */
router.delete('/:id', validarJwt, esAdmin, deleteTipoEquipoByID)

module.exports = router

