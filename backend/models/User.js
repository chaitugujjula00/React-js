const mongoose = require('mongoose')

const userSchema = new mongoose.model('user',{
    userName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    }
})

module.exports=userSchema;