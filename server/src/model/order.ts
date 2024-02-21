import mongoose from "mongoose"


const orderSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    orderNumber : Number,
    foods : [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"food"
        }
    ],
    totalPrice : Number,
    process : {
        type: String,
        enum : ["ordered" , "inprogress" , "delivered"],
        default: "ordered",
    },
    createdDate : Date,
    district : String,
    khoroo : String,
    apartment : String,
    payment : {
        type:String,
        enum :["paid", "not paid"],
        default:"not paid"
    }

})

const orderModel = mongoose.model("order" , orderSchema)
export {orderModel}