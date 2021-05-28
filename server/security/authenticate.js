const crypto = require('crypto');

// takes in a salt, plain text password and hashed password
// returns boolean comparing plain text and hashed password
module.exports = authenticate = (salt, password, hashedPassword) => (
  crypto.createHash('sha256').update(`${password}${salt}`).digest() === hashedPassword
);

/*

  const { password, salt } = data;

  const hashedPassword = await Passwords.find({ email: data.email });

  console.log(hashedPassword[0].password);

  // use input password and salt from db
  // compare with hashed password from db
  console.log(crypto.createHash('sha256').update(`${data.password}${hashedPassword[0].salt}`).digest('hex'));

*/