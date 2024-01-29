import mongoose from "mongoose"

 

 export const connectDatabase = async() => {
    try {
        const MONGODB = "mongodb+srv://admin:admin123@url-shortener.zr3sxmw.mongodb.net/?retryWrites=true&w=majority"
        await mongoose.connect(MONGODB);
        console.log("Database connected successfully");
        
    } catch (error : unknown) {
        console.log(error)
        throw new Error(" Database didn't connect")
    }
 }