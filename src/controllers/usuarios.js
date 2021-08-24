const { response, request } = require('express');
const firebase = require('../database/config');

const obtenerUsuario = async (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'GET'
    });
};

const guardarUsuario = async (req = request, res = response) => {
    res.json({
        ok: true,
        msg: 'POST'
    });
};

module.exports = {
    obtenerUsuario,
    guardarUsuario,
}