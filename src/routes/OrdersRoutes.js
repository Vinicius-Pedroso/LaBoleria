import { Router } from "express";
import {OrdersControllers} from "../controllers/OrdersControllers.js";
import OrdersValidation from "../middlewares/OrdersValidation.js";

const OrdersRouter = Router();

OrdersRouter.post("/order", OrdersValidation, OrdersControllers);
OrdersRouter.get("/orders", );
OrdersRouter.get("/orders/:id", );

export default OrdersRouter;