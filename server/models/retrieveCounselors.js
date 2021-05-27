const { Counselors } = require('../database/schema.js');

module.exports = {
  retrieveCounselors: (email, res) => {
    Counselors.find({ email }, (err, data) => {
      if(err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data[0]);
      }
    })
  },
}