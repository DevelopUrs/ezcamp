const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

const parentsSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  profileImageURL: String,
  email: {
    type: String,
    unique: true
  },
  children: Array
});

const childrenSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  profileImageURL: String,
  parent: String,
  allergies: Array
});

const formsSchema = mongoose.Schema({
  file: String,
  type: {
    type: String,
    enum: ['medical', 'travel']
  },
  child_id: String
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
  assignedChildren: Array
});

const passwordsSchema = mongoose.Schema({
  email: String,
  salt: String,
  vector: String,
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
  month: String,
  activityName: String,
  description: String,
  forms: [{medicalForms: String, travelPermissionForms: String}],
  time: Date
});

const Parents = mongoose.model('Parents', parentsSchema);
const Children = mongoose.model('Children', childrenSchema);
const Forms = mongoose.model('Forms', formsSchema);
const Counselors = mongoose.model('Counselors', counselorsSchema);
const Passwords = mongoose.model('Passwords', passwordsSchema);
const Camp = mongoose.model('Camps', campSchema);
const Calendars = mongoose.model('Calendars', calendarSchema);

module.exports = {Parents, Children, Forms, Counselors, Passwords, Camp, Calendars};

// const reviewSchema = new Schema({
//   review_id: {type: Number, unique: true},
//   product_id: Number,
//   rating: Number,
//   summary: String,
//   recommend: Boolean,
//   response: String,
//   body: String,
//   date: Date,
//   reviewer_name: String,
//   helpfulness: Number,
//   photos: [{}],
// });

// const Review = mongoose.model('review', reviewSchema);