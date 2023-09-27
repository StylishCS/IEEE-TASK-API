const mongoose = require('mongoose');

let messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: false,
    },
    message:{
        type: String,
        required: false,
    },
});

const Message = mongoose.model("Message", messageSchema);

exports.Message = Message;