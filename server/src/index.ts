import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDatabase } from "./utils/database";
import { user } from "./router/user";
import { category } from "./router/category";
import { food } from "./router/food";
import { order } from "./router/order";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", user);
app.use("/category" , category);
app.use("/food" , food);
app.use("/order" , order);

app.get("/", (req, res) => {
  res.status(200).send({ success: true });
});

app.listen(PORT, () => {
  connectDatabase();
  console.log(`app running successfully , ${PORT}`);
});

//ts-node-dev
