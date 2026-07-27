const express = require('express');

const app = express();

const notes = [] ///temp database

app.get('/notes',(req,res)=>{
    
    res.status(200).json({
        message:"All data Feteched Sucessfully"
    })
    
    
})

app.post('/notes',(req,res)=>{
    notes.push(req.body)
    
    res.status(201).json({
        message:"Notes Created Sucessfully"
    })
})


module.exports = app;