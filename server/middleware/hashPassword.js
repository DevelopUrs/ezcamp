const crypto = require('crypto');

module.exports = hashPassword = (req, res, next) => {
  const { password, salt } = req.body;

  req.body['password'] = crypto.createHash('sha256').update(`${password}${salt}`).digest('hex');

  next();
};
