const express = require('express');
const app = express();
// require("socket.io") = Server in docs
const SServer = require('socket.io');

app.use(express.static(__dirname + "/public"));

const EServer = app.listen(8000);

const io = SServer(EServer);

// io is 'server' in docs
io.on('connection', (socket) => {
    console.log(socket.id, " has connected");

    socket.emit('messageFromServer', { data: 'Welcome to the Socket Server' });
    socket.on('newMessageToServer', (dataFromClient) => {
        console.log('Data: ', dataFromClient);
        io.emit('newMessageToClients', { text: dataFromClient.text });
    });
});
