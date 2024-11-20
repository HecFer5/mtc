import { Router } from "express";
import {
  getMeridianos,
  getMeridiano,
  actualizarMeridiano,
  getMeridianosOrden,
  getMeridianosSoploAsc,
  getMeridianosSoploDesc,
  getMeridianosTipoAsc,
  getMeridianosTipoDesc,
  getMeridianosPuntosAsc,
  getMeridianosPuntosDesc,
  traeLosPuntos
 
} from "../controladores/tareasControladores.js";

const router = Router();

router.get("/meridianoasc", getMeridianos);
router.get("/meridianodesc", getMeridianosOrden);
router.get("/soploasc", getMeridianosSoploAsc);
router.get("/soplodesc", getMeridianosSoploDesc);
router.get("/tipoasc", getMeridianosTipoAsc);
router.get("/tipodesc", getMeridianosTipoDesc);
router.get("/puntosasc", getMeridianosPuntosAsc);
router.get("/puntosdesc", getMeridianosPuntosDesc);

router.get("/meridiano/:id", getMeridiano);
router.get("/puntos/:id", traeLosPuntos);
router.put("/meridiano/:id", actualizarMeridiano);

export default router;
