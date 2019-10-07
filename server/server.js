const express = require('express');
const socketIO = require('socket.io'); //cargamos la libreria
const http = require('http'); // levantamos un servidor propio de node

const path = require('path');

const app = express();
let server = http.createServer(app); // creo el servidor por donde va a salir la aplicacion

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// Esta es la comunicacion del backend
module.exports.io = socketIO(server); //Inicializo el servidor
require('./sockets/socket'); //llamo la libreria de socket que cree en server/sockets/socket


server.listen(port, (err) => { //Uso el server con http que cree no el de express

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});