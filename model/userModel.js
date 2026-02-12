const mongoose = require("mongoose");

const userSchema = mangoose.scheme({
    firstName:{
        type:string,
        required:true
    },
    lastName:{
        type:string,
        required:true
    },
    email:{
         type:string,
        required:true
    },
    password:{
        type:string,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default: false
    }
    })
module.exports = mongoose.model("user",userModel);

