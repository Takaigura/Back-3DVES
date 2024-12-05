import { Request, Response } from "express";
import Autor from "../models/autor.modelo";

// Crear un nuevo autor
export const crearAutor = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido } = req.body;
        if (!nombre || !apellido) {
            res.status(400).json({ error: "Nombre y apellido son requeridos" });
        }else{
        const autor = await Autor.create({ nombre, apellido });
        res.status(201).json(autor);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el autor" });
    }
};

// Obtener todos los autores
export const obtenerAutores = async (_req: Request, res: Response) => {
    try {
        const autores = await Autor.findAll();
        res.status(200).json(autores);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener los autores" });
    }
};

// Eliminar un autor por ID
export const eliminarAutor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const autor = await Autor.findByPk(id);
        if (!autor) {
            res.status(404).json({ error: "Autor no encontrado" });
        }else{
        await autor.destroy();
        res.status(200).json({ message: "Autor eliminado con éxito" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar el autor" });
    }
};

