const { insertEvent } = require('../models');

module.exports = addEvent = (req, res) => {
  const { campCode } = req.params;
  insertEvent(req.body, campCode, res);
};
