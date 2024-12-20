import express from "express";
import {
    crearLibro,
    obtenerLibros,
    eliminarLibro,
} from "../services/libro.servicio";

const router = express.Router();

/**
 * Define las rutas relacionadas con los libros.
 */

// Crear un nuevo libro
router.post("/", crearLibro);

// Obtener todos los libros
router.get("/", obtenerLibros);

// Eliminar un libro por ID
router.delete("/:id", eliminarLibro);

export default router;
