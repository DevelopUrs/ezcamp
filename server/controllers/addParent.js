const crypto = require('crypto');
const { Passwords } = require('../database/schema.js');
const { insertParent } = require('../models');

const initialize = require('../security/initialize.js');
const hashPassword = require('../security/hash.js');
const authentucate = require('../security/authenticate.js');

module.exports = addParent = async (req, res) => {
  insertParent(req.body, res);
};
