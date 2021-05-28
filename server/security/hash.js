const crypto = require('crypto');
const initialize = require('./initialize.js');

// takes in password string
// hashes password property with type buffer
const hashPassword = (user) => {
  user['password'] = crypto.createHash('sha256').update(`${user.password}${user.salt}`).digest('hex');
};

module.exports = hashPassword;
