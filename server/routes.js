const express = require('express');
const router = express.Router();

const { getParent, getCalendar, getForm } = require('./controllers');
const { addParent, } = require('./controllers');
const { getCounselors } = require('./controllers/getCounselors.js');

router.get('/parent/:email', getParent);
router.get('/calendar/:campCode/:month', getCalendar);
router.get('/counselors/:campCode', getCounselors);
router.get('/form/:type/:email', getForm);

// authenticate user password
// pass in email and password in req.body
// router.get('/login', login);

router.post('/parent', addParent);
// first name, last name, email, password
// router.post('/calendar', addEvent);

// router.post('/counselors', addCounselor);
// // first name, last name, email, password

// router.post('/child', addChild);
// router.post('/form', addForm);

module.exports = router;


