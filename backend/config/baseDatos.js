require('dotenv').config();
const mongoose = require('mongoose');

const conectarBaseDatos = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conexión exitosa a la base de datos MongoDB');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
        process.exit(1);
    }
};

mongoose.connection.on('disconnected', () => {
    console.log('Se perdió la conexión con la base de datos');
});

module.exports = conectarBaseDatos;
