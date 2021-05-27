const crypto = require('crypto');
const algorithm = 'aes-256-ctr';

// takes in object with vector and salt; a data string
// return encrypted data
const encrypt = ({ vector, salt }, data) => {
  const key = crypto.scryptSync(vector, salt, 32);
  const cipher = crypto.createCipheriv(algorithm, key, vector);
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

  return encrypted.toString('hex');
};

// takes in object with vector and salt; an encrypted data string
// return decrypted data
const decrypt = ({ vector, salt }, data) => {
  const key = crypto.scryptSync(vector, salt, 32);
  const decipher = crypto.createDecipheriv(algorithm, key, Buffer.from(vector, 'hex'));
  const decrypted = Buffer.concat([decipher.update(Buffer.from(data, 'hex')), decipher.final()]);

  return decrypted.toString();
};

module.exports = {
  encrypt,
  decrypt,
};
