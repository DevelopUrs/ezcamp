const { Parents, Passwords } = require('../database/schema.js');

module.exports = insertParent = async (data, res) => {
  const {
    firstName, lastName, email, password, salt, vector
  } = data;

  await Parents.create({ firstName, lastName, email });
  await Passwords.create({ email, salt, vector, password });
  res.end();
};
