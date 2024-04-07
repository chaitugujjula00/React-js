const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
// console.log("hello");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

const user=require('./models/User');

mongoose.connect('mongodb+srv://loki:reactjs@react-js.z8jgbau.mongodb.net/?retryWrites=true&w=majority&appName=react-js').then(()=>{
    console.log('connected');
}).catch((e)=>{
    console.log('error'+e);
})


app.get('/login',cors(),(req,res)=>{
    console.log('tes');
    // res.render("helllo")
})

app.post('/signup',async(req,res)=>{
    const {email,userName,password}=req.body;
    const newUser = new user();
    newUser.email=email;
    newUser.userName=userName;
    newUser.password=password;
    const savedUser = await newUser.save();
    res.json("hello");
})

app.listen('3000',()=>{
    console.log("listening to 3000");
})