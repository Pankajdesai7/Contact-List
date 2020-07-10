//require mongoose it is an ODM
const mongoose=require('mongoose');


//create a schema

const contactSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
});

const Contact= mongoose.model('Contact',contactSchema);

module.exports=Contact;