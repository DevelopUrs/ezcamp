const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

const counselorsSchema = mongoose.Schema({
  campCode: {
    type: String,
    enum: ['camp1', 'camp2']
  },
  firstName: String,
  lastName: String,
  profileImageURL: String,
  bio: String,
  email: {
    type: String,
    unique: true
  },
});

const parentsSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  profileImageURL: String,
  email: {
    type: String,
    unique: true
  },
});

const childrenSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true
  },
  profileImageURL: String,
  parent: String,
  allergies: Array,
  counselor: String,
});

const formsSchema = mongoose.Schema({
  file: String,
  type: {
    type: String,
    enum: ['medical', 'activity']
  },
  child: String
});

const passwordsSchema = mongoose.Schema({
  email: String,
  salt: Buffer,
  vector: Buffer,
  password: String
});

const campSchema = mongoose.Schema({
  campCode: {
    type: String,
    enum: ['camp1', 'camp2']
  },
  name: String,
  description: String
});

const calendarSchema = mongoose.Schema({
  campCode: {
    type: String,
    enum: ['camp1', 'camp2']
  },
  month: String,
  activityName: String,
  description: String,
  start: Date,
  end: Date
});

const Parents = mongoose.model('Parents', parentsSchema);
const Children = mongoose.model('Children', childrenSchema);
const Forms = mongoose.model('Forms', formsSchema);
const Counselors = mongoose.model('Counselors', counselorsSchema);
const Passwords = mongoose.model('Passwords', passwordsSchema);
const Camps = mongoose.model('Camps', campSchema);
const Calendars = mongoose.model('Calendars', calendarSchema);

module.exports = {Parents, Children, Forms, Counselors, Passwords, Camps, Calendars};