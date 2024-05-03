const express = require("express");
const router = express.Router();
const Verify=require("../Middleware/VerifyToken")
const packController = require("../Controller/Package");
router.post("/postpack",Verify,packController.postPackage );
router.get("/getpack",packController.getPackage);
module.exports = router;
