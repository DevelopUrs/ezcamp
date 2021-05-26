const fs = require('fs');
const fsPromise = require('fs/promises');
const readline = require('readline');
const path = require('path');
const mongoose = require('mongoose');

const {
  Parents, Children, Forms, Counselors, Passwords, Camps, Calendars
} = require('../server/database/schema.js');

// const generate = require('./generate.js');
// generate();

// const parents = [];
// const children = [];
// const forms = [];
// const counselors = [];
// const passwords = [];
// const camps = [];
// const calendars = [];

const load = async () => {
  const files = await fsPromise.readdir('data');
  files.forEach((file) => {
    const model = file.split('.')[0];
    const readInterface = readline.createInterface({
      input: fs.createReadStream(path.join('data', file))
    });

    readInterface.on('line', (line) => {
      const data = JSON.parse(line);

      switch(model) {
        case 'calendars':
          Calendars.create(data)
            .then(() => {})
            .catch((err) => console.log(err));
        case 'camp':
          Camps.create(data)
            .then(() => {})
            .catch((err) => console.log(err));
        case 'children':
          Children.create(data)
            .then(() => {})
            .catch((err) => console.log(err));
        case 'counselors':
          Counselors.create(data)
            .then(() => {})
            .catch((err) => console.log(err));
        case 'form':
          Forms.create(data)
            .then(() => {})
            .catch((err) => console.log(err));
        case 'parents':
          Parents.create(data)
            .then(() => {})
            .catch((err) => console.log(err));
        case 'passwords':
          Passwords.create(data)
            .then(() => {})
            .catch((err) => console.log(err));
      }
    });

    readInterface.on('end', () => console.log('done adding'));
  });
};

load();

// setTimeout(() => {
//   [parents, children, forms, counselors, passwords, camps, calendars].forEach((data) => {
//     console.log(data.length);
//   });
// }, 1000);
