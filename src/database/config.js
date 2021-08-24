// Firebase-admin
var admin = require('firebase-admin');

// Inicializar el proyecto de firebase
admin.initializeApp({
    credential: admin.credential.cert(require('./firebase.json')),
});

// Obtenemos la instancia de firebase para la base de datos y autentificación
const db = admin.firestore();
const auth = admin.auth();

module.exports = {
    db,
    auth
};