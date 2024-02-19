import { Response , Request } from "express";
import { foodModel } from "../model/food";

export const CreateFood = async(req:Request , res:Response) =>  {
try {
    const {name} = req.body
    console.log(name);
    const result = await foodModel.create({name})
    console.log(result);
    return res.status(200).send({success:true})
    
} catch (error) {
    return res.status(400).send({ success: false, error: "Invalid request" });
}
}