const { retrieveForm } = require('../models');

module.exports = getForms = (req, res) => {
  const { type, email } = req.params;
  retrieveForm(type, email, res);
};
