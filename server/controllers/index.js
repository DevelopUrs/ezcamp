// exports.get = require('./get.js');
// exports.getParent = require('./getParent.js');

// getParent is undefined
const getParent = require('./getParent.js');
const getCalendar = require('./getCalendar.js');
const getForm = require('./getForm.js');
const getLogin = require('./getLogin.js');

const addParent = require('./addParent.js');
const addCounselor = require('./addCounselor.js');
const addChild = require('./addChild.js');
const addEvent = require('./addEvent.js');
const addForm = require('./addForm.js');

const changeCampInfo = require('./changeCampInfo.js');
const changeCounselorInfo = require('./changeCounselorInfo.js');
const changeCalendarInfo = require('./changeCalendarInfo.js');

module.exports = {
  getParent,
  getCalendar,
  getForm,
  getLogin,

  addParent,
  addCounselor,
  addChild,
  addEvent,
  addForm,

  changeCampInfo,
  changeCounselorInfo,
  changeCalendarInfo,
};
