// exports.reviews = require('./reviews.js');
// exports.reviewsMeta = require('./reviewsMeta.js');
// exports.helpful = require('./helpful.js');
// exports.report = require('./report.js');

const retrieveParent = require('./retrieveParent.js');
const retrieveCalendar = require('./retrieveCalendar.js');
const retrieveForms = require('./retrieveForm.js');
const validateLogin = require('./validateLogin.js');

const insertParent = require('./insertParent.js');
const insertCounselor = require('./insertCounselor.js');
const insertChild = require('./insertChild.js');
const insertEvent = require('./insertEvent.js');
const insertForm = require('./insertForm.js');

const updateCampInfo = require('./updateCampInfo');

module.exports = {
  retrieveParent,
  retrieveCalendar,
  retrieveForm,
  validateLogin,

  insertParent,
  insertCounselor,
  insertChild,
  insertEvent,
  insertForm,

  updateCampInfo,
};
