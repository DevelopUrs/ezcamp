const express = require('express');
const path = require('path');
// const socketio = require('socket.io');
const http = require('http');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});
const router = require('./routes.js');
const PORT = process.env.PORT || 3001;

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room })
    // error handling
    if (error) return callback(error);
    // tell the user that they have joined the chat
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the ${user.room}` })
    // tell all other users in the room that the user has joined
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` })

    socket.join(user.room);

    callback();
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  })

  socket.on('disconnect', () => {
    console.log('User had left.');
  })
})

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));
// app.use(express.json());
app.use(router);

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})