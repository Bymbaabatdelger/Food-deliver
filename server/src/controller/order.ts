import { Response , Request } from "express";
import { foodModel } from "../model/food";
import { orderModel } from "../model/order";

export const CreateOrder = async(req:Request , res:Response) =>  {

try {

    const order = await orderModel.create(req.body)
    return res.status(200).send({success:true}).json(order)
    
} catch (error) {
    return res.status(500).send({ success: false, error: "Invalid request" });
}
}

