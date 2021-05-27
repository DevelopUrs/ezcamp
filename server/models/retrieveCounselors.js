const { Counselors } = require('../database/schema.js');

module.exports = {
  retrieveCounselor: (id, res) => {
    Counselors.find({ id }, (err, data) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  },
}