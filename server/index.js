const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes.js');
const PORT = process.env.PORT || 3001;
const multer = require("multer");
const fs = require('fs');

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(express.static(path.join(__dirname, '../upload/')));
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})



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
