const express = require('express');
// const { reviews, reviewsMeta, helpful, report, loaderio } = require('./controllers/index.js');
const { getParent } = require('./controllers/index.js');
const { getCalendar } = require('./controllers/index.js');
const { getCounselors } = require('./controllers/getCounselors.js');
const router = express.Router();

// router.get('/api', controllers.get.get);

// query param: parent email
router.get('/parent/:email', getParent);

router.get('/calendar/:campCode/:month', getCalendar);
router.get('/counselors/:campCode', getCounselors);
// router.get('/form/:type/:email', getForms);

// router.post('/parent', addParent);
// // first name, last name, email, password
// router.post('/calendar', addEvent);

// router.post('/counselors', addCounselor);
// // first name, last name, email, password

// router.post('/child', addChild);
// router.post('/form', addForm);

module.exports = router;


