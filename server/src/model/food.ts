import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name : String,
    image : {
        type:String,
        required:false
    },
    ingredient : String,
    price : Number,
    discount:{
        type:Number,
        default:0,
    },
    public_id:String,
    category_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "category"
    },
},{timestamps:true})

const foodModel = mongoose.model("food" , foodSchema)

export {foodModel}