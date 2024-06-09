// OBJETO QUE PERMITE INTERACTUAR CON LA BASE DE DATOS SIGUIENDO EL FORMATO DEL ESQUEMA.
// El modelo es el esquema que hemos creado, y tiene que compilarlo para crear un modelo que cumpla las condiciones que hemos puesto en el esquema.

const mongoose = require('mongoose');
const UserScheme = require('../schemes/user.scheme');

const UserModel = mongoose.model('User', UserScheme);

module.exports = UserModel;
