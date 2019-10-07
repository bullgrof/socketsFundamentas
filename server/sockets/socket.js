const {
    io
} = require('../server'); //importo el servidor que necesito para trabajar las variables que se encuentran aqui





io.on('connection', (client) => {

    console.log('usuario conectado'); // Uusario en linea

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });


    client.on('disconnect', () => {
        console.log('User Disconnected');
    });
    /*
        dispara un callback si la el servidor escucho correctamente el mensaje
     */
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /* 
        if (mensaje.usuario) { // Sino viene el usuario todo sale mal
            callback({
                resp: 'Todo salio bien'
            });
        } else {
            callback({
                resp: 'Tod salio mal!'
            })
        }
     */


    });


});