const express = require('express');
const path = require('path');
const cors = require('cors');
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

app.use(cors());
// app.use(router);
const PORT = process.env.PORT || 3001;
const multer = require('multer');
const fs = require('fs');

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room })
    // error handling
    if (error) return callback(error);
    // tell the user that they have joined the chat
    // socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the ${user.room}` })
    // tell all other users in the room that the user has joined
    socket.broadcast.to(user.room).emit('message', { user: '', text: `${user.name} has joined!` })

    socket.join(user.room);

    callback();
  })

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });

    callback();
  })

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit('message', { user: '', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    }
  })
})

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(express.static(path.join(__dirname, '../upload/')));
app.use(express.json());
app.use(router);


var storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, 'upload/')
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
})

var upload = multer({ storage: storage })

app.post("/upload", upload.single("file"), (req, res) => {

  try {
    if (req.file) {

      res.send({
        status: true,
        message: "File uploaded!",
      });

    } else {

      res.status(400).send({
        status: false,
        data: "File not found!",
      });
    }

  } catch (err) {

    res.status(500).send(err);
  }
});

app.get('/files/:filename', function(req, res) {

  if (req.params.filename !== '') {

    res.download('upload/' + req.params.filename, function(error) {

      if (error) {

        res.status(500).send()
      } else {

        res.status(200).send();
      }
    })
  } else {

    console.log('File does not exist')
  }
})

app.get('/files', (req, res) => {

  fs.readdir("upload/", function (error, data) {
    if (error) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    data.forEach((file) => {
      fileInfos.push({
        url: file,
      });
    });

    res.status(200).send(fileInfos);
  });
});

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`)
// })

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
