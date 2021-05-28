const { insertChild } = require('../models');

module.exports = addChild = (req, res) => {
  insertChild(req.body, res);
};
