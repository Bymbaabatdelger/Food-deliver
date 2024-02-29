import { Response, Request } from "express";
import { foodModel } from "../model/food";
import { v2 as cloudinary } from "cloudinary";
import { cloudinaryConfig } from "../utils/cloudinary";
import { categoryModel } from "../model/category";
import mongoose from "mongoose";

cloudinaryConfig();

type FoodType = {
  name: string;
  image: string;
  ingredient: string;
  price: number;
  discount?: number;
  categoryName: string;
};

export const createFood = async (req: Request, res: Response) => {

  try {
    const { name,ingredient, price, image, discount,categoryName, }: Required<FoodType> = req.body;

    const createFoodDetails = await foodModel.create({
      name: name,
      ingredient:ingredient,
      price:price,
      image:image,
      discount:discount,
      categoryName:categoryName
    });
    createFoodDetails.save()

    await categoryModel.findOneAndUpdate(
      {
        name: categoryName,
      },
      {
        $push: {
          foodId: createFoodDetails._id,
        },
      }
    );

    res.status(201).json(createFoodDetails);
    res.end()

  } catch (error) {
    console.error("Error occured during create a food", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllFoods = async (req: Request, res: Response) => {

  try {
    const allFoods = await foodModel.find();
    res.status(200).json(allFoods);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: " Server Error" });
  }
};

export const getOneFoodById = async (req: Request, res: Response) => {

  try {
    const foodId = await foodModel.findById(req.params.id);
    if (!foodId) {
      return res.status(404).json({ error: "Food not found" });
    }
    res.status(200).json(foodId);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateFoodById = async (req: Request, res: Response) => {

  try {
    const updatedFood = await foodModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFood) {
      return res.status(404).json({ error: "Food not found" });
    }
    res.status(200).json(updatedFood);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteFoodById = async (req: Request, res: Response) => {

  try {
    const deletedFood = await foodModel.findByIdAndDelete(req.params.id);
    if (!deletedFood) {
      return res.status(404).json({ error: "Food not found" });
    }
    res.status(204).json();

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
