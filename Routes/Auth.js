const express = require("express");
const router = express.Router();
const authController = require("../Controller/Auth");
router.post("/google",authController.googleAuth)
module.exports = router;
