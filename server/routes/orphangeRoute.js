const express = require('express')
const orphanage = require('../models/orphanage')

const router = express.Router()

router.get('/get-orphanage',(req,res)=>{
    orphanage.find().then(result => {
        res.status(200).json(result);
    })
})

router.post('/create', (req,res)=>{
    
    const ORPHANAGE = new orphanage({
        name: req.body.name,
        address: req.body.address,
        createdAt:new Date(),
        goal: req.body.goal,
        concept: req.body.concept,
        message:req.body.message
    });
    ORPHANAGE.save().then(()=>{
        
        res.json({ "message": "Notes created successfully", "success": true });
    }).catch(er => res.json({ message: er.message, success: false }));

})
router.delete('/delete/:id',(req,res)=>{
    orphanage.findByIdAndRemove(req.params.id).then(result =>{
        res.status(200).json(result);
    })
})

module.exports = router