const { Parents } = require('../database/schema.js');

const retrieveParent = (email, res) => {
  Parents.find({ email }, (err, data) => {
    res.send(data);
  });
};

module.exports = retrieveParent;
