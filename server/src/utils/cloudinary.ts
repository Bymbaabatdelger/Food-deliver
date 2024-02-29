import { v2 } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

export const cloudinaryConfig = async () => {
  try {

    v2.config({
      cloud_name: process.env.CLOUDNAME || "",
      api_key: process.env.APIKEY || "",
      api_secret: process.env.APISECRET || "",
    });
    console.log("Cloudinary connected");
    
  } catch (error) {
    console.log("Cloudinary connection interrupted");
  }
};


