const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('fs');
const path = require('path');

const ObjectId = mongoose.Types.ObjectId;
const {
  Parents, Children, Forms, Counselors, Passwords, Camps, Calendars
} = require('../server/database/schema.js');

const generate = () => {
  const rows = new Array(10);

  const parents = [];
  const children = [];
  const forms = [];
  const counselors = [];
  const passwords = [];
  const emails = [];
  const camps = [];
  const calendars = [];

  const parentsEmail = [];
  const counselorsEmail = [];
  const childrenEmail = [];

  const addData = [
    () => {
      [Parents, Children, Forms, Counselors, Passwords, Camps, Calendars].forEach((model) => {
        model.collection.drop();
      });
    }, () => {
      const campCodes = [1, 2];
      for (let count = 0; count < 10; count++) {
        const email = faker.internet.email();
        counselorsEmail.push(email);
        emails.push(email);

        counselors.push({
          campCode: campCodes[count % 2],
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          profileImageURL: faker.image.imageUrl(),
          bio: faker.commerce.productDescription(),
          email,
        });
      }

      counselors.forEach((counselor) => {
        fs.appendFile('data/counselors.txt', JSON.stringify(counselor) + '\n', () => {});
      });
    }, () => {
      for (let count = 0; count < 10; count++) {
        const email = faker.internet.email();
        parentsEmail.push(email);
        emails.push(email);

        parents.push({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          profileImageURL: faker.image.imageUrl(),
          email,
        });
      }

      parents.forEach((parent) => {
        fs.appendFile('data/parents.txt', JSON.stringify(parent) + '\n', () => {});
      });
    }, () => {
      for (let count = 0; count < parentsEmail.length; count++) {
        const email = faker.internet.email();
        childrenEmail.push(email);
        emails.push(email);

        children.push({
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email,
          profileImageURL: faker.image.imageUrl(),
          parent: parentsEmail[count],
          allergies: [],
          counselor: counselorsEmail[count],
        });
      }

      children.forEach((child) => {
        fs.appendFile('data/children.txt', JSON.stringify(child) + '\n', () => {});
      });
    }, () => {
      for (let count = 0; count < childrenEmail.length; count++) {
        const child = childrenEmail[count];

        forms.push({
          file: faker.system.fileName(),
          type: 'medical',
          child,
        });

        forms.push({
          file: faker.system.fileName(),
          type: 'activity',
          child,
        });
      }

      forms.forEach((form) => {
        fs.appendFile('data/forms.txt', JSON.stringify(form) + '\n', () => {});
      });
    }, () => {
      for (let count = 0; count < emails.length; count++) {
        passwords.push({
          email: emails[count],
          salt: faker.internet.password(),
          vector: faker.internet.password(),
          password: faker.internet.password(),
        });
      }

      passwords.forEach((password) => {
        fs.appendFile('data/passwords.txt', JSON.stringify(password) + '\n', () => {});
      });
    }, () => {
      camps.push({
        campCode: 1,
        name: faker.company.companyName(),
        description: faker.commerce.productDescription(),
      });

      camps.push({
        campCode: 2,
        name: faker.company.companyName(),
        description: faker.commerce.productDescription(),
      });

      camps.forEach((camp) => {
        fs.appendFile('data/camp.txt', JSON.stringify(camp) + '\n', () => {});
      });
    }, () => {
      for (let count = 0; count < 10; count++) {
        const campCodes = [1, 2];

        calendars.push({
          campCode: campCodes[count % 2],
          month: faker.date.month(),
          activityName: faker.music.genre(),
          forms: [],
          start: faker.date.past(),
          end: faker.date.future(),
        });
      }

      calendars.forEach((calendar) => {
        fs.appendFile('data/calendars.txt', JSON.stringify(calendar) + '\n', () => {});
      });
    }
  ]
  .forEach((func) => func());
};

generate();
