const crypto = require('crypto');
const { Passwords } = require('../database/schema.js');

module.exports = validateLogin = async (email, password, res) => {
  try {
    const data = await Passwords.find({ email });

    const salt = data[0].salt;
    const storedPassword = data[0].password;

    crypto.createHash('sha256').update(`${password}${salt}`).digest('hex') === storedPassword
    ? res.status(200).send(true) : res.status(401).send(false);
  } catch (err) {
    res.status(401).send(err);
  }
};
