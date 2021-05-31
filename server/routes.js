const express = require('express');
const router = express.Router();

const { getParent, getCalendar, getForm, getLogin } = require('./controllers');
const { addParent, addCounselor, addChild, addEvent, addForm } = require('./controllers');
const { getCounselors } = require('./controllers/getCounselors.js');
const { changeCampInfo, changeCounselorInfo, changeCalendarInfo } = require('./controllers');

// get
router.get('/parent/:email', getParent);
router.get('/calendar/:campCode/:month', getCalendar);
router.get('/counselors/:campCode', getCounselors);
router.get('/form/get/:type/:email', getForm);

// pass in email and password in req.body
router.get('/login', getLogin);

// post
router.post('/signup/parent', addParent);
// also takes in a campCode
router.post('/signup/counselor', addCounselor);
// also takes in an allergies array
router.post('/signup/child', addChild);
// takes in a campCode, activityName, start and end
router.post('/calendar/:campCode', addEvent);
// takes in a child, form and type in req.body
router.post('/form/add', addForm);

// put/patch
// takes in campCode, name, description
router.put('/camp/:campCode', changeCampInfo);
// takes in a firstName, lastName, profileImageURL, bio
router.put('/counselor/:email', changeCounselorInfo);
router.put('/calendar/:campCode', changeCalendarInfo);

module.exports = router;
