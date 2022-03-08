const express = require("express");
const router = express.Router();

// Require controller modules.
var userController = require("../controllers/authController");

//GET a posts
router.get("/:id", userController.getUser);

module.exports = router;
