import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  
    userName : String,
    userEmail : {
        type : String ,
        unique :true,
    },
    password: {
     type:String,
     select:false,
     required:true,
    },
    avatarImage : Buffer,
    phoneNumber : Number,
    role:  {
      type : String,
      enum : ["admin" , "user"],
      default:"user",
    }

})

const userModel = mongoose.model("user" , UserSchema)

export {userModel}