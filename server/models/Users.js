const mongoose = require("mongoose")
const Schema = mongoose.Schema;
// Create User schema

const UserSchema = new  Schema({
    firstName: { 
        type: String, 
        required: true 
    },
    email:{
        type :String , 
        unique :true ,
        required:true
    },
    lastName: {
        type: String, 
        required: false}
        ,
        password: {
            type: String,  
            required: false},
createdAt: {
    type: Date,
    default: new Date()
},
avatar: {
    type: Object,
    required: false,
    contains: {
        url: {
            type: String
        },
        publicId: {
            type: String
        }
    }
},
deleted: {
    type: Boolean,
    default: false
},
accountType: {
    type: String,
    required: false,
    default: null
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


module.exports = User = mongoose.model('Users', UserSchema);
