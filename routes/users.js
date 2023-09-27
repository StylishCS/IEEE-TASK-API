var express = require('express');
var router = express.Router();
const {getMessagesController, sendMessageController} = require("../controller/messagesController");

/* GET POST Message listing. */
router.get("/getMessages", getMessagesController);
router.post("/sendMessage", sendMessageController);


module.exports = router;
