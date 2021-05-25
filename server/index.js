const express = require('express');
const path = require('path');
// const socketio = require('socket.io');
const http = require('http');

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
  console.log('new connection!');
  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room);
    // error handling
    const error = true;
    if (error) {
      callback({ error: 'error' });
    }
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