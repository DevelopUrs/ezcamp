const { retrieveCounselors } = require('../models/retrieveCounselors.js');

module.exports = {
  getCounselors: (req, res) => {
    const { email } = req.params;
    retrieveCounselors(email, res);
  }
}