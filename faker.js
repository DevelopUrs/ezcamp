const mongoose = require('mongoose');
const faker = require('faker');

const ObjectId = mongoose.Types.ObjectId;
const {
  Parents, Children, Forms, Counselors, Passwords, Camps, Calendars
} = require('./server/database/schema.js');

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

    Counselors.create(counselors)
      .then(() => console.log('added counselors'))
      .catch((err) => console.log(err));
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

    Parents.create(parents)
      .then(() => console.log('added parents'))
      .catch((err) => console.log(err));
  }, () => {
    for (let count = 0; count < 10; count++) {
      const _id = new ObjectId();
      childrenId.push(_id);

      children.push({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        profileImageURL: faker.image.imageUrl(),
        parent: parentsId[Math.floor(Math.random() * parents.length)],
        allergies: [],
        counselor: counselorsId[Math.floor(Math.random() * counselorsId.length)],
      });
    }

    Children.create(children)
      .then(() => console.log('added children'))
      .catch((err) => console.log(err));
  }, () => {
    for (let count = 0; count < 10; count++) {
      const formType = ['medical', 'travel'];

      forms.push({
        file: faker.system.fileName(),
        type: formType[count % 2],
        child_id: childrenId[Math.floor(Math.random() * childrenId.length)],
      });
    }

    Forms.create(forms)
      .then(() => console.log('added forms'))
      .catch((err) => console.log(err));
  }, () => {
    for (let count = 0; count < emails.length; count++) {
      passwords.push({
        email: emails[count],
        salt: Buffer.alloc(16),
        vector: Buffer.alloc(8),
        password: faker.internet.password(),
      });
    }

    Passwords.create(passwords)
      .then(() => console.log('added passwords'))
      .catch((err) => console.log(err));
  }, () => {
    camps.push({
      campCode: 'camp1',
      name: faker.company.companyName(),
      description: faker.commerce.productDescription(),
    });

    camps.push({
      campCode: 'camp2',
      name: faker.company.companyName(),
      description: faker.commerce.productDescription(),
    });

    Camps.create(camps)
      .then(() => console.log('added camps'))
      .catch((err) => console.log(err));
  }, () => {
    for (let count = 0; count < 10; count++) {
      calendars.push({
        month: faker.date.month(),
        activityName: faker.music.genre(),
        description: faker.commerce.productDescription(),
        forms: [],
        time: faker.date.future(),
      });
    }

    Calendars.create(calendars)
      .then(() => console.log('added calendars'))
      .catch((err) => console.log(err));
  }
].forEach((func) => func());

// const checkData = [
//   () => {
//     Parents.estimatedDocumentCount()
//       .then((data) => console.log('parents', data))
//       .catch((err) => console.log(err));
//   }, () => {
//     Children.estimatedDocumentCount()
//       .then((data) => console.log('children', data))
//       .catch((err) => console.log(err));
//   }, () => {
//     Forms.estimatedDocumentCount()
//       .then((data) => console.log('forms', data))
//       .catch((err) => console.log(err));
//   }, () => {
//     Counselors.estimatedDocumentCount()
//       .then((data) => console.log('counselors', data))
//       .catch((err) => console.log(err));
//   }, () => {
//     Passwords.estimatedDocumentCount()
//       .then((data) => console.log('passwords', data))
//       .catch((err) => console.log(err));
//   }, () => {
//     Camps.estimatedDocumentCount()
//       .then((data) => console.log('camps', data))
//       .catch((err) => console.log(err));
//   }, () => {
//     Calendars.estimatedDocumentCount()
//       .then((data) => console.log('calendars', data))
//       .catch((err) => console.log(err));
//   }
// ].forEach((func) => func());
