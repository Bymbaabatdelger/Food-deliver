import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDatabase } from "./src/utils/database";
import {user } from "./src/router/user";

dotenv.config()

const PORT = 8000;
const start = () => {

     connectDatabase()

    const app = express();
    app.use(express.json);
    app.use(cors())
   app.use("/users" , user)

   const PORT = process.env.PORT || 8000


    app.get("/" , (req, res) => {
        res.status(200).send({success:true})
    })
    
    app.listen(PORT, () => {
        console.log(`app running successfully , ${PORT}`);
        
    });
}

start()

//ts-node-dev

