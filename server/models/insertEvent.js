const { Calendars } = require('../database/schema.js');

module.exports = insertEvent = async (data, campCode, res) => {
  const { activityName, startDate, endDate } = data;

  try {
    await Calendars.create({ campCode, month, activityName, start, end });

    res.status(201).end();
  } catch (err) {
    res.status(400).send(err);
  }
};
