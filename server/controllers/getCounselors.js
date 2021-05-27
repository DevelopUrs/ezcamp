const { retrieveCounselors } = require('../models/retrieveCounselors.js');


module.exports = {
  getCounselors: (req, res) => {
    const { id } = req.params;
    retrieveCounselors(id, res);
  }
}