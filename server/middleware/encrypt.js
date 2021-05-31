const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

const { Passwords } = require('../database/schema.js');

module.exports = encrypt = async (req, res, next) => {
  const { child, file } = req.body;
  const data = await Passwords.find({ email: child });

  const { salt, vector } = data[0];
  const key = crypto.scryptSync(vector, salt, 32);
  const cipher = crypto.createCipheriv(algorithm, key, vector);

  req.body['file'] = Buffer.concat([cipher.update(file), cipher.final()]).toString('hex');

  next();
};
