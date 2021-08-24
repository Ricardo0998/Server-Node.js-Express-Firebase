// Firebase-admin
const firebase = require('../database/config');

/**
 * Método para validar el token de autenticación
 *
 * @param {string} [token = '']
 */
const esTokenValido = async (token = '') => {
    return firebase.auth
        .verifyIdToken(token)
        .then((decodedToken) => {
            console.log('Token validado: ', decodedToken);
        })
        .catch(() => {
            return Promise.reject(`El token ${token} es incorrecto`);
        });
}

module.exports = {
    esTokenValido,
}