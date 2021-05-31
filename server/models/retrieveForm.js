const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

const { Forms, Passwords } = require('../database/schema.js');

module.exports = retrieveForm = async (type, email, res) => {
  try {
    const data = await Forms.find({ type, child: email });
    const { file } = data[0];

    const info = await Passwords.find({ email });
    const { salt, vector } = info[0];

    const key = crypto.scryptSync(vector, salt, 32);
    const decipher = crypto.createDecipheriv(algorithm, key, vector);

    const decrypted = Buffer.concat([decipher.update(Buffer.from(file, 'hex')), decipher.final()]);

    res.status(200).send(decrypted.toString());
  } catch (err) {
    res.status(404).send(err);
  }
};
