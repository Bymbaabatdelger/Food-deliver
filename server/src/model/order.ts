import mongoose from "mongoose"


const orderSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"food-delivery"
    },
    orderNumber : Number,
    foods : Array,
    totalPrice : Number,
    process : {
        type: String,
        enum : ["Захиалсан" , "Бэлтгэгдэж байна" , "Хүргэлтэнд гарсан"]
    },
    createdDate : Date,
    district : String,
    khoroo : String,
    apartment : String,

})

const orderModel = mongoose.model("order" , orderSchema)
export {orderModel}