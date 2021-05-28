const fs = require('fs');
const readline = require('readline');
const path = require('path');
const mongoose = require('mongoose');

const generate = require('./generate.js');
const {
  Parents, Children, Forms, Counselors, Passwords, Camps, Calendars
} = require('../server/database/schema.js');

const load = async () => {
  // generate();

  [Parents, Children, Forms, Counselors, Passwords, Camps, Calendars].forEach((model) => {
    model.collection.drop();
  });

  const data = {
    counselors: Counselors,
    parents: Parents,
    calendars: Calendars,
    children: Children,
    camp: Camps,
    forms: Forms,
    passwords: Passwords,
  };

  Object.entries(data).forEach(async (file) => {
    const [fileName, model] = file;
    const readInterface = readline.createInterface({
      input: fs.createReadStream(path.join('data', `${fileName}.txt`))
    });

    readInterface.on('line', async (line) => await model.create(JSON.parse(line)));
    readInterface.on('end', () => console.log(`done adding ${fileName}`));
  });
};

load();
