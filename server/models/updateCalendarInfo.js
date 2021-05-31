const { Calendars } = require('../database/schema.js');

module.exports = updateCalendarInfo = async (campCode, data, res) => {
  try {
    const { activityName, start, end } = data;
    const updated = await Calendars.findOneAndUpdate(
      { campCode, activityName }, { start, end }, { new: true }
    );

    res.status(200).send(updated)
  } catch (err) {
    res.status(404).send(err);
  }
};
