const { retrieveCounselors } = require('../models/retrieveCounselors.js');

module.exports = {
  getCounselors: (req, res) => {
    const { campCode } = req.params;
    retrieveCounselors(campCode, res);
  }
}