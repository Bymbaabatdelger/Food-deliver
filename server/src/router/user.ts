 import express from "express"
import { logIn, signUp } from "../controller/user"


 const user = express.Router()

 user.route("/").post(signUp);
 user.route("/login").post(logIn)


 export {user}