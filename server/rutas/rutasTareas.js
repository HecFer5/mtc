import { Router } from "express";
import {
  getMeridianos,
  getMeridiano,
  actualizarMeridiano
 
} from "../controladores/tareasControladores.js";

const router = Router();

router.get("/meridiano", getMeridianos);
router.get("/meridiano/:id", getMeridiano);
router.put("/meridiano/:id", actualizarMeridiano);

export default router;
