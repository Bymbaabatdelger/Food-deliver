 import express from "express"
import { signUp } from "../controller/user"

 const user = express.Router()

 user.route("/").post(signUp);

 export {user}