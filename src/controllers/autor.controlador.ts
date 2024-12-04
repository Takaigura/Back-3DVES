import { Request, Response } from "express";
import Autor from "../models/autor.modelo";

export const registrarAutor = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido } = req.body;

        if (!nombre || !apellido) {
            res.status(400).json({ error: "Campos requeridos: nombre, apellido" });
        }

        const autor = await Autor.create({ nombre, apellido });
        res.status(201).json(autor);
    } catch (error) {
        res.status(500).json({ error: "Error al registrar el autor" });
    }
};

export const obtenerAutores = async (_req: Request, res: Response) => {
    try {
        const autores = await Autor.findAll();
        res.json(autores);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener autores" });
    }
};
