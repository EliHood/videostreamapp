const express = require('express');
const app = express();
const https = require('http').Server(app);
const port = process.env.PORT || 3000;
const io = require('socket.io')(https);
https.listen(port, () => {
  console.log('listening on ', port);
});
io.origins('*:*');
io.on('connection', socket => {
  console.log('a user connected to socket');
  socket.on('sessionStarted', room => {
    console.log('create or join to room', room);
    console.log(io.sockets.adapter.rooms);
    const myRoom = io.sockets.adapter.rooms[room] || {length: 0};
    const numClients = myRoom.length;
    console.log('room id :', room, 'has', numClients, 'clients');
    if (numClients === 0) {
      socket.join(room);
      socket.emit('sessionCreated', room);
    } else if (numClients > 0) {
      console.log('this got called');
      socket.join(room);
      socket.emit('userJoined', room);
    }
  });

  socket.on('ready', room => {
    console.log('ready');

    socket.broadcast.to(room).emit('ready');
  });

  socket.on('offer', event => {
    console.log('offer');
    socket.broadcast.to(event.room).emit('offer', event.sdp);
  });
});
