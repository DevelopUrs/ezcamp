const { retrieveParent } = require('../models');
console.log(retrieveParent);

module.exports = getParent = (req, res) => {
  // do something from model
  const { email } = req.params;
  retrieveParent(email, res);
};
