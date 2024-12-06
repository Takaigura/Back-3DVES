import { Request, Response } from "express";
import Libro from "../models/libro.modelo";

/**
 * Valida los campos requeridos para las solicitudes.
 */
const validarCamposRequeridos = (campos: any[], res: Response): boolean => {
    for (const campo of campos) {
        if (!campo.valor) {
            res.status(400).json({ error: `${campo.nombre} es requerido.` });
            return false;
        }
    }
    return true;
};

/**
 * Crear un nuevo libro.
 */
export const crearLibro = async (req: Request, res: Response) => {
    try {
        const { titulo, id_autor, id_categoria } = req.body;

        const camposValidos = validarCamposRequeridos(
            [
                { nombre: "título", valor: titulo },
                { nombre: "id_autor", valor: id_autor },
                { nombre: "id_categoria", valor: id_categoria },
            ],
            res
        );

        if (!camposValidos) return;

        const nuevoLibro = await Libro.create({ titulo, id_autor, id_categoria });
        res.status(201).json(nuevoLibro);
    } catch (error) {
        console.error("Error al crear el libro:", error);
        res.status(500).json({ error: "Error interno al crear el libro." });
    }
};

/**
 * Obtener todos los libros.
 */
export const obtenerLibros = async (_req: Request, res: Response) => {
    try {
        const libros = await Libro.findAll();
        res.status(200).json(libros);
    } catch (error) {
        console.error("Error al obtener los libros:", error);
        res.status(500).json({ error: "Error interno al obtener los libros." });
    }
};

/**
 * Eliminar un libro por ID.
 */
export const eliminarLibro = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const libroEncontrado = await Libro.findByPk(id);
        if (!libroEncontrado) {
            res.status(404).json({ error: "Libro no encontrado." });
        }else{
            await libroEncontrado.destroy();
            res.status(200).json({ message: "Libro eliminado con éxito." });
        }
    } catch (error) {
        console.error("Error al eliminar el libro:", error);
        res.status(500).json({ error: "Error interno al eliminar el libro." });
    }
};
