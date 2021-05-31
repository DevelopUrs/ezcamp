const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes.js');

const initializeHash = require('./middleware/initializeHash.js');
const hashPassword = require('./middleware/hashPassword.js');
const encrypt = require('./middleware/encrypt.js');

// Have Node serve the files for our built React app
// app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(express.json());
app.use('/signup/', initializeHash, hashPassword);
app.use('/form/add', encrypt);
app.use('/', router);

module.exports = app;
