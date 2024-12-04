import { Router } from "express";
import { registrarAutor, obtenerAutores } from "../controllers/autor.controlador";

const router = Router();

// Ruta para registrar un autor
router.post("/autores", registrarAutor);

// Ruta para obtener todos los autores
router.get("/autores", obtenerAutores);

export default router;
