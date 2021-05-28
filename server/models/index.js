// exports.reviews = require('./reviews.js');
// exports.reviewsMeta = require('./reviewsMeta.js');
// exports.helpful = require('./helpful.js');
// exports.report = require('./report.js');

// exports.retrieveParent = require('./retrieveParent.js');
const retrieveParent = require('./retrieveParent.js');
const retrieveCalendar = require('./retrieveCalendar.js');
const retrieveForms = require('./retrieveForm.js');

const insertParent = require('./insertParent.js');

module.exports = {
  retrieveParent,
  retrieveCalendar,
  retrieveForm,

  insertParent,
};
