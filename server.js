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

    socket.on('event1', (data) => {
        console.log(data.msg);
    });

    socket.emit('event2', {
        msg: 'Server to client, do you read me? Over.'
    });

    socket.on('event3', (data) => {
        console.log(data.msg);
        socket.emit('event4', {
            msg: 'Loud and clear :)'
        });
    });

});

server.listen(port, () => {
    console.log("Listening on port " + port);
});