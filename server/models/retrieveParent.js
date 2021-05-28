const { Parents } = require('../database/schema.js');

const retrieveParent = (email, res) => {
  Parents.find({ email }, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      // let parentsData = {};
      // parentsData['campName'] =

    res.send(data);
    }
  });
};

module.exports = retrieveParent;
