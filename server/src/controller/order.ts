import { Response , Request } from "express";
import { foodModel } from "../model/food";

export const CreateOrder = async(req:Request , res:Response) =>  {
try {
    const {orderNumber} = req.body
    console.log(orderNumber);
    const result = await foodModel.create({orderNumber})
    console.log(result);
    return res.status(200).send({success:true})
    
} catch (error) {
    return res.status(400).send({ success: false, error: "Invalid request" });
}
}