const { validateLogin } = require('../models');

module.exports = getLogin = (req, res) => {
  const { email, password } = req.body;
  validateLogin(email, password, res);
};
