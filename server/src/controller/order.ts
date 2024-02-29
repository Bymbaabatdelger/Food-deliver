import { Response , Request } from "express";
import { foodModel } from "../model/food";
import { orderModel } from "../model/order";

export const CreateOrder = async(req:Request , res:Response) =>  {

try {
    const order = await orderModel.create(req.body)
    return res.status(200).send({success:true}).json(order)
    
} catch (error) {
    return res.status(500).send({ success: false, error: "Invalid request" });
}
};

export const getAllOrders = async (req: Request, res: Response) => {

    try {
      const orders = await orderModel.find();
      res.status(200).json(orders);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: " Server Error" });
    }
  };


  export const getOrderById = async (req: Request, res: Response) => {

    try {
      const order = await orderModel.findById(req.params.id);
      if (!order) {
        return res.status(404).json({ error: "order not found" });
      }
      res.status(200).json(order);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const updateOrderById = async (req: Request, res: Response) => {

    try {
      const updatedOrder = await orderModel.findByIdAndUpdate( req.params.id, req.body,{ new: true });
      if (!updatedOrder) {
        return res.status(404).json({ error: "order not found" });
      }
      res.status(200).json(updatedOrder);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  export const deleteOrderById = async (req: Request, res: Response) => {

    try {
      const deletedOrder = await orderModel.findByIdAndDelete(req.params.id );
      if (!deletedOrder) {
        return res.status(404).json({ error: "Order not found" });
      }
      res.status(204).json();

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

