const http = require('node:http');
const websocket = require('ws');

const server = http.createServer((req, res) => {
    res.end('I am connected');
});

// web socket server
const wss = new websocket.WebSocketServer({ server });

wss.on('headers', (headers, req) => {
    console.log(headers);
});

wss.on('connection', (ws, req) => {
    console.log(req);
})

server.listen(8000, () => {
    console.log('server is listening at port 3000');
});
