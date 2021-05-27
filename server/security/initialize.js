const crypto = require('crypto');

// takes in a user object with a username and password property
// decorates the object with a salt and vector with types buffer
const initialize = (user) => {
  user['salt'] = crypto.createHash('sha256').update(crypto.randomBytes(64)).digest();
  user['vector'] = crypto.createHash('sha256').update(crypto.randomBytes(64)).digest().slice(0, 16);
};

module.exports = initialize;
