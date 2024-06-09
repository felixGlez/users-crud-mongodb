// FORMATO DE LOS DATOS.
// Los esquemas son las estructuras que van a tener nuestros datos (en nuestro caso usuarios). Esto sirve para evitar que puedas meter datos incorrectos.

const { mongoose } = require('mongoose');

const UserScheme = mongoose.Schema(
  {
    _id: String,
    name: String,
    email: String,
  },
  {
    collection: 'users',
  }
);

module.exports = UserScheme;
