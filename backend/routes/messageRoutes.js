const express = require("express");
const router = express.Router();

const {createMessage} = require("../controllers/messageController.js");

router.post("/contact", createMessage);

module.exports = router;