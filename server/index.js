const express = require('express');
const path = require('path');
const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const router = require('./routes.js');
const PORT = process.env.PORT || 3001;

io.on('connection', (socket) => {
  console.log('new connection!');
  socket.on('disconnect', () => {
    console.log('User had left.');
  })
})

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})