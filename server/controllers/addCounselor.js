const { insertCounselor } = require('../models');

module.exports = addCounselor = (req, res) => {
  insertCounselor(req.body, res);
};
