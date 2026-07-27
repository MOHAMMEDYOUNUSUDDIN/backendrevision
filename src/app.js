const express = require('express');

const app = express();

const notes = [] ///temp database

app.get('/hello',(req,res)=>{
    
    res.send("Hello Guys!")
    
})

app.get('/post',(req,res)=>{
    res.send("All data recieved!")
})


module.exports = app;