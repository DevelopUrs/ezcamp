// const { Calendars } = require('../database/schema.js');

// const retrieveCalendar = (campCode, month, res) => {
//   Calendars.find({ campCode, month }, (err, data) => {
//     const formatted =
//     if (err) {
//       res.status(400).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// };

const { Calendars } = require('../database/schema.js');

const retrieveCalendar = (campCode, month, res) => {
    Calendars.find({ campCode, month }, (err, data) => {
      if (err) {
        res.status(400).send(`Error in cal events get request: ${err}`);
      } else {
        let calendarData = {};
        calendarData['campCode'] = 'camp2 - need to add camp name to cal';
        calendarData['activities'] = {};
        data.forEach((event) => {
          let activity = {};
          activity = {
            activityName: event.activityName,
            description: event.description,
            start: event.start,
            end: event.end
          }
          calendarData['activities'][event.month] = activity;
        })
        res.status(200).send(calendarData);
      }
    })
  }

module.exports = retrieveCalendar;

// module.exports =