const { Counselors, Passwords } = require('../database/schema.js');

module.exports = insertCounselor = async (data, res) => {
  const {
    campCode, firstName, lastName, email, password, salt, vector
  } = data;

  try {
    await Counselors.create({ campCode, firstName, lastName, email });
    await Passwords.create({ email, salt, vector, password });

    res.status(201).end();
  } catch (err) {
    res.status(400).send(err);
  }
};
