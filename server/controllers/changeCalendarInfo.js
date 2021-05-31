const { updateCalendarInfo } = require('../models');

module.exports = changeCalendarInfo = (req, res) => {
  const { campCode } = req.params;
  updateCalendarInfo(campCode, req.body, res);
};
