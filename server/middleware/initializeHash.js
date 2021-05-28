const crypto = require('crypto');

// const initialize = require('../security/initialize.js');
const hashPassword = require('../security/hash.js');

module.exports = hashUserInfo = (req, res, next) => {
  req.body['salt'] = crypto.createHash('sha256').update(crypto.randomBytes(64)).digest('hex');
  req.body['vector'] = crypto.createHash('sha256').update(crypto.randomBytes(64)).digest('hex').slice(0, 16);

  next();
};
