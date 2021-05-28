const { retrieveCalendar } = require('../models');
// console.log(retrieveCalendar);
module.exports = getCalendar = (req, res) => {
  const { campCode, month } = req.params;
  retrieveCalendar(campCode, month, res);
}