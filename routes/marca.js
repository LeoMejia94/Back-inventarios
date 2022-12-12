const { Router } = require('express')
const { 
    createMarca, 
    getMarcas, 
    getMarcaByID,
    updateMarcaByID,
    deleteMarcaByID
}= require('../controllers/marca')
const validarJwt = require('../middlewares/validarJwt')
const { esAdmin } = require('../middlewares/validarRol')

const router = Router()

/**
 * Crea una marca
 */
router.post('/', [validarJwt,
    esAdmin], createMarca );

/**
 * Consulta todas las marcas
 */
router.get('/', [validarJwt,
    esAdmin], getMarcas);

/**
 *  Consulta una marca por su ID
 */
router.get('/:id', [validarJwt,
    esAdmin], getMarcaByID);

/**
 * Actualiza una marca por su ID
 */
router.put('/:id', [validarJwt,
    esAdmin], updateMarcaByID)

/**
 * Borra una marca por su ID
 */
router.delete('/:id', validarJwt, esAdmin, deleteMarcaByID)

module.exports = router

