const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

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