const crypto = require('crypto');

// takes in a salt, plain text password and hashed password
// returns boolean comparing plain text and hashed password
module.exports = authenticate = (salt, password, hashedPassword) => (
  crypto.createHash('sha256').update(`${password}${salt}`).digest('hex') === hashedPassword
);