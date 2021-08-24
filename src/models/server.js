const express = require('express')
const cors = require('cors');

/**
 * Clase para inicializar el servidor con su configuración
 *
 * @class Server
 */
class Server {
    constructor() {
        // Express
        this.app = express();
        // Puerto
        this.port = process.env.PORT;
        // Path para usuarios
        this.usuariosPath = '/api/usuarios';

        // Middelewares
        this.middelewares();

        // Rutas
        this.routes();
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server corriendo en puerto: ', this.port);
        });
    }

    middelewares() {
        // CORS
        this.app.use(cors());
        // Lectura y parseo del body
        this.app.use(express.json());
    }
}

module.exports = Server;