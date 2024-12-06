import { Request, Response } from "express";
import Autor from "../models/autor.modelo";

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
 * Crear un nuevo autor.
 */
export const crearAutor = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido } = req.body;

        const camposValidos = validarCamposRequeridos(
            [
                { nombre: "nombre", valor: nombre },
                { nombre: "apellido", valor: apellido },
            ],
            res
        );
        if (!camposValidos) return;

        const nuevoAutor = await Autor.create({ nombre, apellido });
        res.status(201).json(nuevoAutor);
    } catch (error) {
        console.error("Error al crear el autor:", error);
        res.status(500).json({ error: "Error interno al crear el autor." });
    }
};

/**
 * Obtener todos los autores.
 */
export const obtenerAutores = async (_req: Request, res: Response) => {
    try {
        const autores = await Autor.findAll();
        res.status(200).json(autores);
    } catch (error) {
        console.error("Error al obtener los autores:", error);
        res.status(500).json({ error: "Error interno al obtener los autores." });
    }
};

/**
 * Eliminar un autor por ID.
 */
export const eliminarAutor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const autorEncontrado = await Autor.findByPk(id);
        if (!autorEncontrado) {
            res.status(404).json({ error: "Autor no encontrado." });
        }else{
            await autorEncontrado.destroy();
            res.status(200).json({ message: "Autor eliminado con éxito." });
        }
    } catch (error) {
        console.error("Error al eliminar el autor:", error);
        res.status(500).json({ error: "Error interno al eliminar el autor." });
    }
};

