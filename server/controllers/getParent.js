const { retrieveParent } = require('../models');
console.log(retrieveParent);

const getParent = (req, res) => {
  // do something from model
  const { email } = req.params;
  retrieveParent(email, res);
};

module.exports = getParent;