import { Request, Response } from "express";
import Categoria from "../models/categoria.modelo";

export const registrarCategoria = async (req: Request, res: Response) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            res.status(400).json({ error: "Campo requerido: nombre" });
        }
        const categoria = await Categoria.create({ nombre });
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({ error: "Error al registrar la categoría" });
    }
};

export const obtenerCategorias = async (_req: Request, res: Response) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener categorías" });
    }
};
