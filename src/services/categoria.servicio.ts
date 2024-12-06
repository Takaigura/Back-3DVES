import { Request, Response } from "express";
import Categoria from "../models/categoria.modelo";

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
 * Crear una nueva categoría.
 */
export const crearCategoria = async (req: Request, res: Response) => {
    try {
        const { nombre } = req.body;

        const camposValidos = validarCamposRequeridos([{ nombre: "nombre", valor: nombre }], res);
        if (!camposValidos) return;

        const nuevaCategoria = await Categoria.create({ nombre });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        console.error("Error al crear la categoría:", error);
        res.status(500).json({ error: "Error interno al crear la categoría." });
    }
};

/**
 * Obtener todas las categorías.
 */
export const obtenerCategorias = async (_req: Request, res: Response) => {
    try {
        const categorias = await Categoria.findAll();
        res.status(200).json(categorias);
    } catch (error) {
        console.error("Error al obtener las categorías:", error);
        res.status(500).json({ error: "Error interno al obtener las categorías." });
    }
};

/**
 * Eliminar una categoría por ID.
 */
export const eliminarCategoria = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const categoriaEncontrada = await Categoria.findByPk(id);
        if (!categoriaEncontrada) {
            res.status(404).json({ error: "Categoría no encontrada." });
        }else{
            await categoriaEncontrada.destroy();
            res.status(200).json({ message: "Categoría eliminada con éxito." });
        }
    } catch (error) {
        console.error("Error al eliminar la categoría:", error);
        res.status(500).json({ error: "Error interno al eliminar la categoría." });
    }
};

