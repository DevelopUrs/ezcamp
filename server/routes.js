const express = require('express');
// const { reviews, reviewsMeta, helpful, report, loaderio } = require('./controllers/index.js');
const controllers = require('./controllers/index');
const router = express.Router();

router.get('/', controllers.get.get);
// router.get('/reviews', reviews.getReviews);
// router.get('/reviews/meta', reviewsMeta.getMetadata);
// router.post('/reviews', reviews.postReview);
// router.put('/reviews/:review_id/helpful', helpful.updateHelpful);
// router.put('/reviews/:review_id/report', report.reportReview);

module.exports = router;
