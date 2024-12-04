import { Request, Response } from "express";
import Libro from "../models/libro.modelo";

export const registrarLibro = async (req: Request, res: Response) => {
    try {
        const { titulo, precio, id_autor, id_categoria } = req.body;
        const libro = await Libro.create({ titulo, precio, id_autor, id_categoria });
        res.status(201).json(libro);
    } catch (error) {
        res.status(500).json({ error: "Error al registrar el libro" });
    }
};

export const consultarLibros = async (req: Request, res: Response) => {
    try {
        const { id_autor, id_categoria } = req.query;
        const whereClause: any = {};

        if (id_autor) whereClause.id_autor = id_autor;
        if (id_categoria) whereClause.id_categoria = id_categoria;

        const libros = await Libro.findAll({ where: whereClause });
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: "Error al consultar libros" });
    }
};
