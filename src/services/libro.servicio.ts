import { Request, Response } from "express";
import Libro from "../models/libro.modelo";

// Crear un nuevo libro
export const crearLibro = async (req: Request, res: Response) => {
    try {
        const { titulo, id_autor, id_categoria } = req.body;

        if (!titulo || !id_autor || !id_categoria) {
            res.status(400).json({ error: "Título, autor y categoría son requeridos" });
        }else{
            const libro = await Libro.create({ titulo, id_autor, id_categoria });
            res.status(201).json(libro);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el libro" });
    }
};

// Obtener todos los libros
export const obtenerLibros = async (_req: Request, res: Response) => {
    try {
        const libros = await Libro.findAll();
        res.status(200).json(libros);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los libros" });
    }
};

// Eliminar un libro por ID
export const eliminarLibro = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const libro = await Libro.findByPk(id);
        if (!libro) {
            res.status(404).json({ error: "Libro no encontrado" });
        }else{
            await libro.destroy();
            res.status(200).json({ message: "Libro eliminado con éxito" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el libro" });
    }
};
