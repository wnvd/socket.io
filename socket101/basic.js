const express = require("express");
const app = express();
const SServer = require("socket.io");

app.use(express.static(__dirname + '/public'));

const EServer = app.listen(3000);
const io = SServer(EServer);

io.on('connect', (socket) => {
    console.log(socket.id, "has connected");
    // in ws we use send method 
    // and in socket.io we use 'emit' method
    socket.emit('messageFromServer', { data: "Welcome to socket server!" });
    socket.on('messageFromClient', (data) => {
        console.log("clientData:", data);
    });
    socket.on('disconnect', () => {
        console.log('socket id:', socket.id, ' has disconnected');
    });
});

