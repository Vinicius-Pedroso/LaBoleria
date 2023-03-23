import { Router } from "express";
import {ClientOrdersControllers, ClientsControllers} from "../controllers/ClientsControllers.js";
import { ClientPostValidation, ClientOrdersValidation } from "../middlewares/ClientsValidation.js";

const ClientsRouter = Router();

ClientsRouter.post("/clients", ClientPostValidation, ClientsControllers);
ClientsRouter.get("/clients/:id/orders", ClientOrdersValidation, ClientOrdersControllers);

export default ClientsRouter;