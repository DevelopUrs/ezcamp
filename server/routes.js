const express = require('express');
const router = express.Router();

const { getParent, getCalendar, getForm, checkLogin } = require('./controllers');
const { addParent, addCounselor, addChild, addEvent } = require('./controllers');
const { getCounselors } = require('./controllers/getCounselors.js');

router.get('/parent/:email', getParent);
router.get('/calendar/:campCode/:month', getCalendar);
router.get('/counselors/:campCode', getCounselors);
router.get('/form/:type/:email', getForm);

// pass in email and password in req.body
router.get('/login', checkLogin);

router.post('/signup/parent', addParent);
// also takes in a campCode
router.post('/signup/counselor', addCounselor);
// also takes in an allergies array
router.post('/signup/child', addChild);
// takes in a campCode, month, activityName, start and end
router.post('/calendar/:campCode', addEvent);

// router.post('/form', addForm);

module.exports = router;