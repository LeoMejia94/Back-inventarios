const { Router } = require('express')
const { 
    createEstado, 
    getEstados, 
    getEstadoByID,
    updateEstadoByID,
    deleteEstadoByID
} = require('../controllers/estado')
const validarJwt = require('../middlewares/validarJwt')
const { esAdmin } = require('../middlewares/validarRol')


const router = Router()

/**
 * Crea un estado
 */
router.post('/', [validarJwt,
    esAdmin], createEstado)

/**
 * Consulta todos los estados
 */
router.get('/', [validarJwt,
    esAdmin], getEstados)

/**
 *  Consulta un estado por su ID
 */
router.get('/:id', [validarJwt,
    esAdmin], getEstadoByID)

/**
 * Actualiza un estado por su ID
 */
router.put('/:id', [validarJwt,
    esAdmin],  updateEstadoByID)

/**
 * Borra un estado por su ID
 */
router.delete('/:id', validarJwt, esAdmin, deleteEstadoByID)

module.exports = router

