import { Router } from "express";
import ClientsControllers from "../controllers/ClientsControllers.js";
import ClientValidation from "../middlewares/ClientsValidation.js";

const ClientsRouter = Router();

ClientsRouter.post("/clients", ClientValidation, ClientsControllers);
ClientsRouter.get("/clients/:id/orders", );

export default ClientsRouter;