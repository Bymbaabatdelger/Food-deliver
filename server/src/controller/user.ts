  import bcrypt from "bcrypt"
  import { Request, Response } from "express";
  import jwt  from "jsonwebtoken";
import { userModel } from "../model/user";

  type signUpType = {
    userName : String ,
    userEmail : String , 
    phoneNumber : Number,
    password : string | Buffer,

  }


export const signUp = async ( req : Request , res : Response) => {
 try {
    const { userName , userEmail , phoneNumber , password }:Required<signUpType> = req.body
    console.log(req.body);
    
    const saltRounds = 10;
    bcrypt.hash(password , saltRounds, async function(error , hash) {
        try {
            const result = await userModel.create({userName, password:hash , userEmail , phoneNumber})
            console.log(result);
            
        } catch (error) {
            throw new Error(JSON.stringify(error))
        }
    });
   
    return res.status(201).send({ success: true });
    
    
 } catch (error:any) {
    if (error.code === 11000) {
        return res.status(400).send({
          success: false,
          error: "already existing username",
          code: error.code,
        });
      }
      return res.status(400).send({ success: false, error: "Invalid request" });
 }
}