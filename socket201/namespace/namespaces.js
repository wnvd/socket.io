const express = require('express');
const SServer = require('socket.io');
const app = express();

app.use(express.static(__dirname + '/public'));

const EServer = app.listen(8000);

const io = SServer(EServer);

io.of('/').on('connection', (socket) => {
    socket.join('chat');
    io.of('/').to('chat').emit('welcomeToChatRoom', {});
    io.of('/').to('chat').to('chat2').to('adminChat').emit('welcomeToChatRoom', {});

    io.of('/admin').emit('userJoinedMainNS', "");
    console.log(socket.id, ' has connected to /');

    io.of('/').emit('newMessageToClients', { text: 'hello' });

    socket.on('newMessageToServer', (dataFromClient) => {
        console.log('Data: ', dataFromClient);
        io.of('/').emit('newMessageToClients', { text: dataFromClient.text });
    });
});

io.of('/admin').on('connection', (socket) => {
    console.log(socket.id, ' has joined /admin');
    socket.join('/admin')
    io.of('/admin').emit('newMessageToClientsFromAdmin', {});
    io.of('/admin').to('chat').emit('welcomeToChatRoom', {});
});

