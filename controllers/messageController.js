const MESSAGES = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


const data = {
    messages : MESSAGES,
    setMessages : function (data){this.messages = data}
}

const getAllMessages =(req,res)=>{

     res.render("index",{allMessages: data.messages});
  }
// get 
const getMessageForm = (req,res)=>{
    res.render("new",{'message':'please write your message'});
}
const createNewMessage =(req,res)=>{

   const newMessage ={
    user:req.body.user || '',
    text:req.body.text || '',
   }

   if(!newMessage.user || !newMessage.text){
    return res.status(400).render("new",{'message':'name and message are required'});
   }
   data.setMessages([...data.messages,newMessage]);
   res.status(201)
   .render("index",{allMessages:data.messages});

  }

  module.exports = {
    getAllMessages,
    getMessageForm,
    createNewMessage,
  
}