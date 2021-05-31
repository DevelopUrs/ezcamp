const { Forms } = require('../database/schema.js');

module.exports = insertForm = async (data, res) => {
  try {
    const { file, type, child } = data;
    console.log('before add');
    await Forms.create({ file, type, child });

    console.log('added');
    res.status(201).end();
  } catch (err) {
    res.status(400).send(err);
  }
};
