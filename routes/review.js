const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js"); // ✅ Fixed: added require()
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/review.js");

// Post Route
router.post("/:id/reviews",
  validateReview,
  isLoggedIn,
  wrapAsync(reviewController.createReview)
);

// Delete Review Route
router.delete("/:id/reviews/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewController.destroyReview)
);

module.exports = router;

// reviews
// const validateReview = (req, res, next) => {
//   let { error } = reviewSchema.validate(req.body);
//   if (error) {
//     let errMsg = error.details.map((el) => el.message).join(",");
//     throw new ExpressError(400, errMsg);
//   } else {
//     next();
//   }
// };
