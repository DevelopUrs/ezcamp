const { Forms } = require('../database/schema.js');

module.exports = retrieveForm = async (type, email, res) => {
  try {
    const data = await Forms.find({type, child: email});
    res.status(200).send(data[0].file);
  } catch (err) {
    res.status(404).send(err);
  }
};
