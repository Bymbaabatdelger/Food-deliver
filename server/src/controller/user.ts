import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { userModel } from "../model/user";
import jwt from "jsonwebtoken"


export const signUp = async (req: Request, res: Response) => {

  try {
    await userModel.create(req.body);
    return res.status(201).send({ success: true });

  } catch (error) {
    return res.status(400).send({ error });
  }

};


export const logIn = async (req: Request, res: Response) => {

  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
      return res.status(404).send({ msg: 'user not found' });
    }

    const isValid = bcrypt.compareSync(password, user.password as string);

    if (!isValid) {
      return res.status(400).send({ msg: 'Email or password incorrect' });
    }

    const token = jwt.sign({ user }, 'MY_SECRET_KEY');

    return res.status(200).send({ success: true, token });

  } catch (error) {
    console.log(error);
    return res.status(400).send({ error });
  }
};




export const getAllUsers = async (req:Request, res:Response) => {

  try {
    const users = await userModel.find();
    res.status(200).json(users);

  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteUser = async (req:Request , res:Response) => {

  const userId = req.params.userId

  try {
    const remove = await userModel.findByIdAndDelete(userId)

    if(remove){
      res.status(200).json(remove)
    }
    res.status(404).json({ error: "User not found" });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({error});
  }
};

export const updateUserById = async (req:Request, res:Response) => {

  const userId = req.params.userId;
  const updatedUserData = req.body;

  try {
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      updatedUserData,
      { new: true }
    );

    if (updatedUser) {
      res.status(200).json(updatedUser);

    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error( error);
    res.status(500).json({ error });
  }
};

export const getOneUserById = async (req: Request, res: Response) => {

  try {
    const checkUser = await userModel.findById(req.params.id);

    if (!checkUser) {
      return res.status(404).json({ error: "user not found" });
    }
    res.status(200).json(checkUser);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
