import { Router } from "express";
import {CakesPostControllers} from "../controllers/CakesControllers.js";
import {CakesPostValidation} from "../middlewares/CakesValidation.js";

const CakesRouter = Router();

CakesRouter.post("/cakes", CakesPostControllers);
// CakesPostValidation - problema de schema
export default CakesRouter;