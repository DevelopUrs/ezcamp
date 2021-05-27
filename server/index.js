const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes.js');

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(express.json());

// for testing purposes
app.use('/test/parent/', (req, res) => {
  const response = {
    id: '123',
    campName: 'camp_name',
    parents: [
      {
        _id: '234',
        firstName: 'parent_first_name',
        lastName: 'parent_last_name',
        profileImageURL: 'url.com',
        email: 'test@email.com',
        children: [
          {
            _id: '345',
            firstName: 'child_first_name',
            lastName: 'child_last_name',
            profileImageUrl: 'url.com',
            allergies: [],
            counselor: '456',
            forms: [
              {
                type: 'medical',
                file: 'my_file.pdf',
              }
            ]
          }
        ]
      }
    ]
  };

  res.status(200).send(response);
});
app.use('/', router);

module.exports = app;
