const { Calendars } = require('../database/schema.js');

const retrieveCalendar = (month, res) => {
  Calendars.find({ month }, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports = retrieveCalendar;