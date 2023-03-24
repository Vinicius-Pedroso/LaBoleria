import { Router } from "express";
import {OrdersByIdControllers, OrdersGetControllers, OrdersPostControllers} from "../controllers/OrdersControllers.js";
import {OrdersGetValidation, OrdersIdValidation, OrdersPostValidation} from "../middlewares/OrdersValidation.js";

const OrdersRouter = Router();

OrdersRouter.post("/orders", OrdersPostControllers);
OrdersRouter.get("/orders", OrdersGetValidation, OrdersGetControllers);
OrdersRouter.get("/orders/:id", OrdersIdValidation, OrdersByIdControllers);
//OrdersPostValidation - problema de schema

export default OrdersRouter;