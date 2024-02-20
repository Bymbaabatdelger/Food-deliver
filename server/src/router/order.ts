import express from "express"
import { CreateOrder, deleteOrderById, getAllOrders, getOrderById } from "../controller/order"
import { updateCategoryById } from "../controller/category"

const order = express.Router()

order.route("/").post(CreateOrder).get(getAllOrders).put(updateCategoryById).delete(deleteOrderById)
order.route("/get").get(getOrderById)

export {order}