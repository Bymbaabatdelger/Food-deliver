import { Response , Request } from "express";
import { categoryModel } from "../model/category";
import mongoose from "mongoose";

 type categoryType = {
    name : string,
    foodId :string,
 }

export const createCategory = async( req:Request , res:Response) => {
   try {
    const {name }:Required<categoryType>= req.body
    console.log(req.body);
    const result = await categoryModel.create({name})
    console.log(result);
    return res.status(200).send({success:true})
    
    
   } catch (error) {
    return res.status(400).send({ success: false, error: "Invalid request" });
   }

}

export const getAllCategory = async (req:Request , res:Response) => {
    try {
        const categories = await categoryModel.find();
        return res.status(200).send({success:true})
    } catch (error) {
        throw new Error(JSON.stringify(error));
    }
}