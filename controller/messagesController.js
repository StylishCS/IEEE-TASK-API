const { Message } = require("../model/Message");

async function sendMessageController(req,res){
    try {
        const sent = await Message.find({email: req.body.email});
        if(sent.length>0){
            return res.status(400).json({msg:"already sent.."})
        }
        const message = new Message({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject || null,
            message: req.body.message || null,
        })
        await message.save();
        return res.status(201).json({msg:"messasge sent.."})
    } catch (error) {
        return res.status(500).json({msg:"INTERNAL SERVER ERROR"});
    }
}

async function getMessagesController(req,res){
    try {
        const messages = await Message.find();
        if(messages.length==0){
            return res.status(404).json({msg:"messages are empty"})
        }
        return res.status(200).json({data: messages});
    } catch (error) {
        return res.status(500).json({ msg: "INTERNAL SERVER ERROR" });
    }
}

module.exports = { sendMessageController, getMessagesController };