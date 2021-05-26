const express = require('express');
const path = require('path');
const app = express();
const router = require('./routes.js');
const PORT = process.env.PORT || 3001;

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})