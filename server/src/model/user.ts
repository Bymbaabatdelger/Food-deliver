import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    userName : String,
    userEmail : {
        type : String ,
        unique :true,
    },
    password : String,
    avatarImage : Buffer,
    phoneNumber : Number,
    role:  {
      type : String,
      enum : ["Админ" , "Хэрэглэгч"]
    }

})

const userModel = mongoose.model( "food-delivery" , UserSchema)

export {userModel}