const { updateCampInfo } = require('../models');

module.exports = changeCampInfo = (req, res) => {
  const { campCode } = req.params;
  updateCampInfo(req.body, campCode, res);
};
