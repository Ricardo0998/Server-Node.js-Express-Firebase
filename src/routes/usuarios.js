const { Router } = require('express');
const { obtenerUsuario, guardarUsuario } = require('../controllers/usuarios');
const { check } = require('express-validator');
// Validaciones
const { validarCampos } = require('../middlewares/validate');
const { esTokenValido } = require('../middlewares/validate-firebase');

const router = Router();

// Rutas generales para el funcionamiento de la API Usuarios
router.get('/obtenerUsuario/:token/:uid', [
    check('token').custom(esTokenValido),
    validarCampos
], obtenerUsuario);

router.post('/crearUsuario', [
    check('token').custom(esTokenValido),
    validarCampos
], guardarUsuario);

module.exports = router;