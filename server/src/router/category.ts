import express from "express"
import {createCategory, deleteCategoryById, getAllCategories, updateCategoryById}  from "../controller/category"
const category =express.Router() 

category.route("/").post(createCategory).get(getAllCategories).put(updateCategoryById).delete(deleteCategoryById);
export {category}