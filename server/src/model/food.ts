import mongoose from "mongoose";


const foodSchema = new mongoose.Schema({
    name : String,
    image : Buffer,
    ingredient : String,
    price : Number,
    discount:{
        type:Number,
        default:0,
    },
    category_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref : "category"
    }
})

const foodModel = mongoose.model("food" , foodSchema)

export {foodModel}