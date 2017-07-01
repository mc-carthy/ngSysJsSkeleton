const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = 8000;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', (socket) => {
    console.log("New connection made");

    // Test messages

    socket.on('send-message', (data) => {
        console.log(data.text);
        io.emit('message-received', data);
    });
});

server.listen(port, () => {
    console.log("Listening on port " + port);
});