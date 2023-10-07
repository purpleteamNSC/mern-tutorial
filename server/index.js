const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users')

mongoose.connect("mongodb+srv://mern:!mfdB61*oYRQjq&Z@cluster0.z9nwyao.mongodb.net/merntutorial?retryWrites=true&w=majority");

app.get("/getUsers", (req, res)=> {
    UserModel.find({}, (err, result)=>{
        if (err) {
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

app.post()

app.listen(3001,()=>{
    console.log("SERVER RUNS");
});