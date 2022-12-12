const { Router } = require('express')
const { 
    createUsuario, 
    getUsuarios, 
    getUsuarioByID,
    updateUsuarioByID,
    deleteUsuarioByID
} = require('../controllers/usuario')

const router = Router()
const validarJwt = require('../middlewares/validarJwt')
const { esAdmin } = require('../middlewares/validarRol')


/**
 * Crea un usuario
 */
router.post('/', [validarJwt,
    esAdmin], createUsuario)

/**
 * Consulta todos los usuarios
 */
router.get('/', [validarJwt,
    esAdmin], getUsuarios)

/**
 *  Consulta un usuario por su ID
 */
router.get('/:id', [validarJwt,
    esAdmin], getUsuarioByID)

/**
 * Actualiza un usuario por su ID
 */
router.put('/:id', [validarJwt,
    esAdmin], updateUsuarioByID)

/**
 * Borra un usuario por su ID
 */
router.delete('/:id', validarJwt, esAdmin, deleteUsuarioByID)

module.exports = router

