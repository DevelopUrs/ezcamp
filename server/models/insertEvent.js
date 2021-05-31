const { Calendars } = require('../database/schema.js');

module.exports = insertEvent = async (data, campCode, res) => {
  const { activityName, start, end } = data;

  try {
    await Calendars.create({ campCode, activityName, start, end });

    res.status(201).end();
  } catch (err) {
    res.status(400).send(err);
  }
};
