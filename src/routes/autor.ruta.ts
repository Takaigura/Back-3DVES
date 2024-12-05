import express from "express";
import {
    crearAutor,
    obtenerAutores,
    eliminarAutor,
} from "../services/autor.servicio";

const router = express.Router();

// Crear un nuevo autor
router.post("/", crearAutor);

// Obtener todos los autores
router.get("/", obtenerAutores);

// Eliminar un autor por ID
router.delete("/:id", eliminarAutor);

export default router;
