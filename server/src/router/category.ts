import express from "express"
import {createCategory, getAllCategory}  from "../controller/category"
const category =express.Router() 

category.route("/").post(createCategory);
category.route("/").get(getAllCategory);
export {category}