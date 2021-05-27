const { retrieveCalendar } = require('../models');
// console.log(retrieveCalendar);
module.exports = getCalendar = (req, res) => {
  const { month } = req.params;
  retrieveCalendar(month, res);
}