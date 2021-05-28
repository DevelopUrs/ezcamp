// exports.get = require('./get.js');
// exports.getParent = require('./getParent.js');

// getParent is undefined
const getParent = require('./getParent.js');
const getCalendar = require('./getCalendar.js');
const getForm = require('./getForm.js');
const getLogin = require('./checkLogin.js');

const addParent = require('./addParent.js');
const addCounselor = require('./addCounselor.js');
const addChild = require('./addChild.js');

module.exports = {
  getParent,
  getCalendar,
  getForm,
  checkLogin,

  addParent,
  addCounselor,
  addChild,
};
