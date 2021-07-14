const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersControllers.js");

router.get("/getUserByID", usersController.getUserByID);

module.exports = router;
