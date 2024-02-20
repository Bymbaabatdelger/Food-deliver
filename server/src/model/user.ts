import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    userName : String,
    userEmail : {
        type : String ,
        unique :true,
    },
    password: {
     type:String,
     required:true,
    },
    avatarImage : Buffer,
    phoneNumber : Number,
    role:  {
      type : String,
      enum : ["Админ" , "Хэрэглэгч"],
      default:"Хэрэглэгч",
    }

})

const userModel = mongoose.model("user" , UserSchema)

export {userModel}