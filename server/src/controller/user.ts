import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { userModel } from "../model/user";
import jwt from "jsonwebtoken"

type signUpType = {
  userName: String;
  userEmail: String;
  phoneNumber: Number;
  password: string | Buffer;
};
type UserType = {
  _id: string;
  username: string;
  password: string;
  __v: number;
}

type LogInType = {
  userEmail: string;
  password: string;
};

export const signUp = async (req: Request, res: Response) => {
  try {
    const { userName, userEmail, phoneNumber, password }: Required<signUpType> = req.body;
    console.log(req.body);

    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, async function (error, hash) {
      try {
        const result = new userModel({
          userName,
          password: hash,
          userEmail,
          phoneNumber,
        });
      
        const savedUser = await result.save();
        res.status(201).json(savedUser);
      
      } catch (error) {
        throw new Error(JSON.stringify(error));
      }
    });

    return res.status(201).send({ success: true });
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(400).send({
        success: false,
        error: "already existing username",
        code: error.code,
      });
    }
    return res.status(400).send({ success: false, error: "Invalid request" });
  }
};

export const logIn = async (req: Request, res: Response) => {
  try {
    const { userEmail, password }:LogInType = req.body;

    const user:UserType | null = await userModel.findOne({ userEmail });
    console.log(user);

    if (!user) {
      return res.status(400).send({ success: false, msg: "User not found" });
    }

    bcrypt.compare(password, user.password, async function (err, result) {
      if (!result) {
        return res.send({
          success: false,
          msg: "Username or password incorrect",
        });

      } else {

        const secretKey = "bat";
        const token = jwt.sign({...user} , secretKey);
        return res.send({success:true , token})
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req:Request , res:Response) => {
  try {
    const {userName , userEmail} = req.body
    const remove = await userModel.deleteOne({userName , userEmail})
    console.log(remove);
    return res.send({success:true})
    
  } catch (error) {
    console.log(error);
  }
}
