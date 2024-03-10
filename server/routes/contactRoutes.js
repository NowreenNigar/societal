const express = require('express')
const contact = require('../models/contact')

const router = express.Router()

router.get('/get-contact',(req,res)=>{
    contact.find().then(result => {
        res.status(200).json(result);
    })
})

router.post('/create', (req,res)=>{
    
    const CONTACT = new contact({
        firstName: req.body.firstName,
        email: req.body.email,
        createdAt:new Date(),
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        message:req.body.message
    });
    CONTACT.save().then(()=>{
        
        res.json({ "message": "Notes created successfully", "success": true });
    }).catch(er => res.json({ message: er.message, success: false }));

})


module.exports = router