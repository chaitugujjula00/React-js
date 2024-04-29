const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
// console.log("hello");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

const user=require('./models/User');

mongoose.connect('mongodb+srv://loki:reactjs@react-js.z8jgbau.mongodb.net/react-js?retryWrites=true&w=majority&appName=react-js').then(()=>{
    console.log('connected');
}).catch((e)=>{
    console.log('error'+e);
})


app.post('/login',cors(),async (req,res)=>{
    const {email,password}=req.body;
    
    const presentUser = await user.findOne({email:email})
    // console.log(presentUser)
    if(!presentUser){res.status(200).send({message:"No user present"})}
    else{
        if(presentUser.password===password){
            console.log(presentUser)
            res.status(202).send({user:presentUser})}
        else{res.status(200).send({message:"Incorrect password"})}
    }
    // res.render("helllo")
})


app.post('/signup',async(req,res)=>{
    const {email,userName,password}=req.body;
    const presentUser = await user.findOne({email:email})
    if(presentUser){ res.status(200).send({message:"user already exists with email"})}
    const newUser = new user();
    newUser.email=email;
    newUser.userName=userName;
    newUser.password=password;
    const savedUser = await newUser.save();
    res.status(202);
    res.json("hello");
})

app.listen('3000',()=>{
    console.log("listening to 3000");
})