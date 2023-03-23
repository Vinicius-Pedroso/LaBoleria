import { Router } from "express";
import {CakesPostControllers} from "../controllers/CakesControllers.js";
import {CakesPostValidation} from "../middlewares/CakesValidation.js";

const CakesRouter = Router();

CakesRouter.post("/cakes", CakesPostValidation, CakesPostControllers);

export default CakesRouter;