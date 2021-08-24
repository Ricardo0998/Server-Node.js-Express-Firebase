const { validationResult } = require('express-validator');


/**
 * Método que valida los campos de la petición
 *
 * @param {any} req
 * @param {any} res
 * @param {any} next
 * @return {*} 
 */
const validarCampos = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();
}

module.exports = {
    validarCampos
}