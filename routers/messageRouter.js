const express =require('express');
const router = express.Router();
const path = require('path');
const messageController = require('../controllers/messageController');


router.get('/', (req, res) => {
    messageController.getAllMessages(req,res)
});

router.route('/new')
                .get((req,res)=>{messageController.getMessageForm(req,res)})
                .post((req,res)=>{messageController.createNewMessage(req,res)});

module.exports = router;