const { Children, Passwords } = require('../database/schema.js');

module.exports = insertChild = async (data, res) => {
  const {
    firstName, lastName, email, parent, counselor, allergies, password, salt, vector
  } = data;

  try {
    await Children.create({ firstName, lastName, email, parent, allergies, counselor });
    await Passwords.create({ email, salt, vector, password });

    res.status(201).end();
  } catch (err) {
    res.status(404).send(err);
  }
};
