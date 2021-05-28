const { Forms } = require('../database/schema.js');

module.exports = retrieveForm = async (type, email, res) => {
  const data = await Forms.find({type, child: email});
  res.send(data[0].file);
};
