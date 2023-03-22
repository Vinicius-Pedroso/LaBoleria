import { Router } from "express";
import CakesControllers from "../controllers/CakesControllers.js";
import CakesValidation from "../middlewares/CakesValidation.js";

const CakesRouter = Router();

CakesRouter.post("/cakes", CakesValidation, CakesControllers);

export default CakesRouter;