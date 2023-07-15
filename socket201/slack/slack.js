const express = require('express');
const app = express();
const SServer = require('socket.io');

const namespace = require("./public/data/namespace.js");

app.use(express.static(__dirname + '/public'));

const EServer = app.listen(8000);

const io = SServer(EServer);


io.on('connect', (socket) => {
    socket.emit('welcome', 'Welcome to Server');
    socket.on('clientConnect', (data) => {
        console.log(socket.id, ' client has connected');
    });

    socket.emit('nsList', namespace)
});
