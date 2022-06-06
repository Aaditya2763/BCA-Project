const express = require("express");
const router = express.Router();
const { userController } = require("../controller/userController");

router.get("/user/profile", userController.getUserDetails);
router.get('/user/support',userController.getSupport);
router.get("/user/feedback", userController.getFeedback);
router.get("/user/wishlist", userController.getWishlist);
router.get("/user/add-query", userController.addQuery);
router.get("/user/query", userController.getQuery);

module.exports = router;
