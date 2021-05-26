const initialize = require('../server/security/initialize.js');
const hash = require('../server/security/hash.js');
const { encrypt, decrypt } = require('../server/security/encryption.js');

const user1 = { username: `my_username1`, password: `my_password1`, };
const user2 = { username: `my_username2`, password: `my_password2`, };

describe('Initialize', () => {
  initialize(user1);
  initialize(user2);

  test(`should have salt`, () => {
    expect(user1['salt']).toBeDefined();
    expect(user2['salt']).toBeDefined();
  });

  test(`should have vector`, () => {
    expect(user1['vector']).toBeDefined();
    expect(user2['vector']).toBeDefined();
  });

  test(`should be unique`, () => {
    expect(user1['salt'] === user2['salt']).toBeFalsy();
    expect(user1['vector'] === user2['vector']).toBeFalsy();
  });
});

describe('Hash Passwords', () => {
  const password1 = user1['password'];
  const password2 = user2['password'];

  hash(user1);
  hash(user2);

  test(`should hash password`, () => {
    expect(password1 !== user1['password']).toBeTruthy();
    expect(password2 !== user2['password']).toBeTruthy();
  });

  test(`should be consistent`, () => {
    const user3 = { username: `my_username3`, password: `same_password` };
    const user4 = { username: `my_username4`, password: `same_password` };

    hash(user3);
    hash(user4);

    expect(user3['password'] = user4['password']);
  });
});

describe('Encryption', () => {
  const data1 = `my_example_data2`;
  const data2 = `my_example_data2`;

  const encrypted1 = encrypt(user1, data1);
  const encrypted2 = encrypt(user2, data2);

  const decrypted1 = decrypt(user1, encrypted1);
  const decrypted2 = decrypt(user2, encrypted2);

  test(`should encrypt data`, () => {
    expect(data1 !== encrypted1).toBeTruthy();
    expect(data2 !== encrypted2).toBeTruthy();
  });

  test(`should decrypt data`, () => {
    expect(data1 === decrypted1).toBeTruthy();
    expect(data2 === decrypted2).toBeTruthy();
  });
});
