const express = require("express");
const router = express.Router();
const { adminController } = require("../controller/adminController");

router.get("/profile", adminController.getAdminDetails);
router.get("/add-admin", adminController.addAdmin);
router.get("/Queries", adminController.getQueries);

module.exports = router;
