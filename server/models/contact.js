const mongoose = require("mongoose")
const Schema = mongoose.Schema;
// Create User schema

const ContactSchema = new  Schema({
    firstName: { 
        type: String, 
        required: false
    },
    email:{
        type :String , 
        unique :true ,
        required:true
    },
phonenumber: {
    type: Number,
    required: false,
    default: null
},
address: {
    type: String,
    required: false,
    default: null
},
message: {
    type: String,
    required: false,
    default: null
}
})


module.exports = Contact = mongoose.model('Contact', ContactSchema);
