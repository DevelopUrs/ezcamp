const express = require('express');
// const { reviews, reviewsMeta, helpful, report, loaderio } = require('./controllers/index.js');
const { getParent } = require('./controllers/index.js');
const router = express.Router();

// router.get('/api', controllers.get.get);

// query param: parent email
router.get('/parent/:email', getParent);

module.exports = router;
