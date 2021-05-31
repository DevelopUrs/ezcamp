const { Counselors } = require('../database/schema.js');

module.exports = updateCounselorInfo = async (data, email, res) => {
  try {
    const { firstName, lastName, bio, profileImageURL } = data;
    const updated = await Counselors.findOneAndUpdate(
      { email }, { firstName, lastName, bio, profileImageURL }, { new: true }
    );

    res.status(200).send(updated);
  } catch (err) {
    res.status(404).send(err);
  }
};
