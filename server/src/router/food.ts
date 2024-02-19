import express from "express"
import { CreateFood } from "../controller/food"

const food = express.Router()

food.route("/").post(CreateFood)
export { food}