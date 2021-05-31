const { Camps } = require('../database/schema.js');

module.exports = updateCampInfo = async (data, campCode, res) => {
  try {
    const { name, description } = data;
    const updated = await Camps.findOneAndUpdate(
      { campCode }, { name, description }, { new: true }
    );

    res.status(200).send(updated);
  } catch (err) {
    res.status(404).send(err);
  }
};
