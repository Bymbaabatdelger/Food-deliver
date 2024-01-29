import express from "express"
import cors from "cors"
import { connectDatabase } from "./src/utils/database";


const PORT = 8000;
const start = () => {
    const app = express();
    app.use(express.json);
    app.use(cors())

    connectDatabase()


    app.get("/" , (req, res) => {
        res.status(200).send({success:true})
    })
    
    app.listen(PORT, () => {
        console.log("app running successfully");
        
    });
}

start()

