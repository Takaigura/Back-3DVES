import express from "express";
import {
    crearCategoria,
    obtenerCategorias,
    eliminarCategoria,
} from "../services/categoria.servicio";

const router = express.Router();

/**
 * Rutas relacionadas con la gestión de categorías.
 */

// Crear una nueva categoría
router.post("/", crearCategoria);

// Obtener todas las categorías
router.get("/", obtenerCategorias);

// Eliminar una categoría por ID
router.delete("/:id", eliminarCategoria);

export default router;

