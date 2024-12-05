import { Request, Response } from "express";
import Categoria from "../models/categoria.modelo";

// Crear una nueva categoría
export const crearCategoria = async (req: Request, res: Response) => {
    try {
        const { nombre } = req.body;
        if (!nombre) {
            res.status(400).json({ error: "El nombre de la categoría es requerido" });
        }else{
            const categoria = await Categoria.create({ nombre });
            res.status(201).json(categoria);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear la categoría" });
    }
};

// Obtener todas las categorías
export const obtenerCategorias = async (_req: Request, res: Response) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener las categorías" });
    }
};

// Eliminar una categoría por ID
export const eliminarCategoria = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            res.status(404).json({ error: "Categoría no encontrada" });
        }else{
            await categoria.destroy();
            res.status(200).json({ message: "Categoría eliminada con éxito" });    
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar la categoría" });
    }
};
