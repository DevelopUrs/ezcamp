const fs = require('fs');
// const fsPromise = require('fs/promises');
const readline = require('readline');
const path = require('path');
const mongoose = require('mongoose');

const {
  Parents, Children, Forms, Counselors, Passwords, Camps, Calendars
} = require('../server/database/schema.js');

const load = async () => {
  const files = await fs.promises.readdir('data');
  files.forEach((file) => {
    const model = file.split('.')[0];
    const readInterface = readline.createInterface({
      input: fs.createReadStream(path.join('data', file))
    });

    readInterface.on('line', (line) => {
      const data = JSON.parse(line);
      console.log(data);

      switch(model) {
        case 'parents':
          Parents.create(data)
            .then(() => {})
            .catch((err) => console.log(err));
      }
    });

    readInterface.on('end', () => console.log('done adding'));
  });
};

load();