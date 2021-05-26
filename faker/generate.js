const mongoose = require('mongoose');
const faker = require('faker');
const fs = require('fs/promises');
const path = require('path');

const ObjectId = mongoose.Types.ObjectId;
const {
  Parents, Children, Forms, Counselors, Passwords, Camps, Calendars
} = require('../server/database/schema.js');

module.exports = generate = () => {
  const rows = new Array(10);

  const parents = [];
  const parentsId = [];
  const children = [];
  const childrenId = [];
  const forms = [];
  const counselors = [];
  const counselorsId = [];
  const passwords = [];
  const emails = [];
  const camps = [];
  const calendars = [];

  const addData = [
    () => {
      const campCodes = ['camp1', 'camp2'];
      for (let count = 0; count < 10; count++) {
        const _id = new ObjectId();
        counselorsId.push(_id);

        const email = faker.internet.email();
        emails.push(email);

        counselors.push({
          _id,
          campCode: campCodes[count % 2],
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          profileImageURL: faker.image.imageUrl(),
          bio: faker.commerce.productDescription(),
          email,
        });
      }

      counselors.forEach((counselor) => {
        fs.appendFile('data/counselors.txt', JSON.stringify(counselor) + '\n')
          .then(() => {})
          .catch((err) => console.log(err));
      });
    }, () => {
      for (let count = 0; count < 10; count++) {
        const _id = new ObjectId();
        parentsId.push(_id);

        const email = faker.internet.email();
        emails.push(email);

        parents.push({
          _id,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          profileImageURL: faker.image.imageUrl(),
          email,
        });
      }

      // Parents.create(parents)
      //   .then(() => console.log('added parents'))
      //   .catch((err) => console.log(err));
      parents.forEach((parent) => {
        fs.appendFile('data/parents.txt', JSON.stringify(parent) + '\n')
          .then(() => {})
          .catch((err) => console.log(err));
      });
    }, () => {
      for (let count = 0; count < parentsId.length; count++) {
        const _id = new ObjectId();
        childrenId.push(_id);

        children.push({
          _id,
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          profileImageURL: faker.image.imageUrl(),
          parent: parentsId[count],
          allergies: [],
          counselor: counselorsId[count],
        });
      }

      // Children.create(children)
      //   .then(() => console.log('added children'))
      //   .catch((err) => console.log(err));
      children.forEach((child) => {
        fs.appendFile('data/children.txt', JSON.stringify(child) + '\n')
          .then(() => {})
          .catch((err) => console.log(err));
      });
    }, () => {
      for (let count = 0; count < childrenId.length; count++) {
        const formType = ['medical', 'travel'];

        forms.push({
          _id: new ObjectId(),
          file: faker.system.fileName(),
          type: formType[count % 2],
          child_id: childrenId[count],
        });
      }

      // Forms.create(forms)
      //   .then(() => console.log('added forms'))
      //   .catch((err) => console.log(err));
      forms.forEach((form) => {
        fs.appendFile('data/form.txt', JSON.stringify(form) + '\n')
          .then(() => {})
          .catch((err) => console.log(err));
      });
    }, () => {
      for (let count = 0; count < emails.length; count++) {
        passwords.push({
          _id: new ObjectId(),
          email: emails[count],
          salt: Buffer.alloc(16),
          vector: Buffer.alloc(8),
          password: faker.internet.password(),
        });
      }

      // Passwords.create(passwords)
      //   .then(() => console.log('added passwords'))
      //   .catch((err) => console.log(err));
      passwords.forEach((password) => {
        fs.appendFile('data/passwords.txt', JSON.stringify(password) + '\n')
          .then(() => {})
          .catch((err) => console.log(err));
      });
    }, () => {
      camps.push({
        _id: new ObjectId(),
        campCode: 'camp1',
        name: faker.company.companyName(),
        description: faker.commerce.productDescription(),
      });

      camps.push({
        _id: new ObjectId(),
        campCode: 'camp2',
        name: faker.company.companyName(),
        description: faker.commerce.productDescription(),
      });

      // Camps.create(camps)
      //   .then(() => console.log('added camps'))
      //   .catch((err) => console.log(err));
      camps.forEach((camp) => {
        fs.appendFile('data/camp.txt', JSON.stringify(camp) + '\n')
          .then(() => {})
          .catch((err) => console.log(err));
      });
    }, () => {
      for (let count = 0; count < 10; count++) {
        calendars.push({
          _id: new ObjectId(),
          month: faker.date.month(),
          activityName: faker.music.genre(),
          description: faker.commerce.productDescription(),
          forms: [],
          time: faker.date.future(),
        });
      }

      // Calendars.create(calendars)
      //   .then(() => console.log('added calendars'))
      //   .catch((err) => console.log(err));
      calendars.forEach((calendar) => {
        fs.appendFile('data/calendars.txt', JSON.stringify(calendar) + '\n')
          .then(() => {})
          .catch((err) => console.log(err));
      });
    }
  ]
  .forEach((func) => func());
};
