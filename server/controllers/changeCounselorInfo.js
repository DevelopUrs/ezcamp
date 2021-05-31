const { updateCounselorInfo } = require('../models');

module.exports = changeCounselorInfo = (req, res) => {
  const { email } = req.params;
  updateCounselorInfo(req.body, email, res);
};
