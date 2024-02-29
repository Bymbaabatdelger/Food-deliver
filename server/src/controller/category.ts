import { Response , Request } from "express";
import { categoryModel } from "../model/category";
import mongoose from "mongoose";

 type categoryType = {
    name : string,
    foodId :string,
 }

export const createCategory = async( req:Request , res:Response) => {

     const {name , foodId }:Required<categoryType>= req.body

   try {
   const  checkFoodIdsByObjectId = Array.isArray(foodId)
   ? foodId.map((id: string) => new mongoose.Types.ObjectId(id))
   : [new mongoose.Types.ObjectId(foodId)];
  
    const checkCategory = await categoryModel.findOne({name});

    if(checkCategory) {

        checkCategory.foodId.push(... checkFoodIdsByObjectId)
        const updatedCategory = await checkCategory.save();

        res.status(200).json(updatedCategory);

    } else {
        const createCategory = await categoryModel.create({
            name,
            foodId: checkFoodIdsByObjectId,
          });
    }
   } catch (error) {
    console.error(error)
    return res.status(500).send({ success: false, error: "Server error" });

   }

}

 export const getAllCategories = async (req: Request, res: Response) => {

    try {
      const categories = await categoryModel.find().populate("foodId");
      res.status(200).json(categories);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: " Server Error" });
    }
  };

  export const getCategoryById = async (req: Request, res: Response) => {

    try {
      const category = await categoryModel.findById(req.params.id);
      if (!category) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(category);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const updateCategoryById = async (req: Request, res: Response) => {

    try {
      const updatedCategory = await categoryModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(200).json(updatedCategory);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const deleteCategoryById = async (req: Request, res: Response) => {

    try {
      const deletedCategory = await categoryModel.findByIdAndDelete(
        req.params.id
      );
      if (!deletedCategory) {
        return res.status(404).json({ error: "Category not found" });
      }
      res.status(204).json();
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };