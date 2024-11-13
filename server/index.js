import express from "express";
import { PORT } from "./config.js";
import rutasDeTareas from "./rutas/rutasTareas.js";
import cors from 'cors'

const app = express();
app.use(cors({
    origin: 'http://localhost:5173' 
}));

app.use(express.json())
app.listen(PORT);
app.use(rutasDeTareas);
console.log("leyendo en el puerto " + PORT);
