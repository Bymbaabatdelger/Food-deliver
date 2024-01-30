import mongoose from "mongoose"

 export const connectDatabase = async() => {
    try {
        const MONGODB : string = process.env.MONGODB || ""
        await mongoose.connect(MONGODB);
        console.log("Database connected successfully");
        
    } catch (error : unknown) {
        console.log(error)
        throw new Error(" Database didn't connect")
    }
 }