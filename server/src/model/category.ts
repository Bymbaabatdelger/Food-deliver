import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type:String,
        unique:true,
        required:true,
    },

    foodId :[ {
        type: mongoose.Schema.Types.ObjectId,
        ref : "food"
    }]
})
const categoryModel  = mongoose.model("category" , categorySchema)

export {categoryModel}