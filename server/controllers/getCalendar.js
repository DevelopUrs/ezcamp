const { retrieveCalendar } = require('../models');
// console.log(retrieveCalendar);
module.exports = getCalendar = (req, res) => {
  const { campCode } = req.params;
  const { month } = req.params;
  retrieveCalendar(campCode, month, res);
}