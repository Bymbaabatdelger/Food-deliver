 import express from "express"
import { deleteUser, getAllUsers, logIn, signUp, updateUserById } from "../controller/user"
import { auth } from "../middleware";

 const user = express.Router()

 user.route("/").post(auth , signUp).get(getAllUsers);
 user.route("/user").post(logIn ).delete(deleteUser).put(updateUserById)

 export {user}