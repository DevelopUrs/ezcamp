const { Parents, Passwords } = require('../database/schema.js');

module.exports = insertParent = async (data, res) => {
  const {
    firstName, lastName, email, password, salt, vector
  } = data;

  try {
    await Parents.create({ firstName, lastName, email });
    await Passwords.create({ email, salt, vector, password });

    res.status(201).end();
  } catch (err) {
    res.status(400).send(err);
  }
};
