const mongoose = require("mongoose");

const Schema = mongoose.Schema

const orphanageSchema = new Schema({

    name : {
        type: String,
        required: false
    },
    address:{
        type: String,
        required: false
    },
    createdAt :{
        type: Date,
        default: new Date()
    },
    goal:{
        type: String,
        required: false
    },
    concept:{
        type: String,
        required: false
    }
    ,
    message:{
        type: String,
        required: false
    }
})

module.exports = orphanage = mongoose.model('orphanage', orphanageSchema)