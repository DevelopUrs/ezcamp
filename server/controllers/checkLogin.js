const { validateLogin } = require('../models');

module.exports = checkLogin = (req, res) => {
  const { email, password } = req.body;
  validateLogin(email, password, res);
};
