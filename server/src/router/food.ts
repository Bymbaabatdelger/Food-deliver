import express from "express";
import {
  createFood,
  deleteFoodById,
  getAllFoods,
  getOneFoodById,
  updateFoodById,
} from "../controller/food";

const food = express.Router();

food
  .route("/foods")
  .post(createFood)
  .get(getAllFoods)
  .put(updateFoodById)
  .delete(deleteFoodById);
food.route("/get").get(getOneFoodById);
export { food };
