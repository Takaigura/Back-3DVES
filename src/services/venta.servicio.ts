import { Request, Response } from "express";
import { Op, Sequelize } from "sequelize";
import Venta from "../models/venta.modelo";

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
 * Registrar una nueva venta.
 */
export const registrarVenta = async (req: Request, res: Response) => {
    try {
        const { id_libro, cantidad, total } = req.body;

        const camposValidos = validarCamposRequeridos(
            [
                { nombre: "id_libro", valor: id_libro },
                { nombre: "cantidad", valor: cantidad },
                { nombre: "total", valor: total },
            ],
            res
        );

        if (!camposValidos) return;

        const nuevaVenta = await Venta.create({ id_libro, cantidad, total });
        res.status(201).json(nuevaVenta);
    } catch (error) {
        console.error("Error al registrar la venta:", error);
        res.status(500).json({ error: "Error interno al registrar la venta." });
    }
};

/**
 * Obtener todas las ventas.
 */
export const obtenerVentas = async (_req: Request, res: Response) => {
    try {
        const ventas = await Venta.findAll();
        res.status(200).json(ventas);
    } catch (error) {
        console.error("Error al obtener las ventas:", error);
        res.status(500).json({ error: "Error interno al obtener las ventas." });
    }
};

/**
 * Obtener el total de ventas por mes.
 */
export const totalVentasPorMes = async (_req: Request, res: Response) => {
    try {
        const totales = await Venta.findAll({
            attributes: [
                [Sequelize.fn("strftime", "%Y-%m", Sequelize.col("createdAt")), "mes"],
                [Sequelize.fn("SUM", Sequelize.col("total")), "totalVentas"],
            ],
            group: ["mes"],
            order: [["mes", "ASC"]],
        });

        res.status(200).json(totales);
    } catch (error) {
        console.error("Error en totalVentasPorMes:", error);
        res.status(500).json({ error: "Error interno al calcular las ventas por mes." });
    }
};

/**
 * Eliminar una venta por ID.
 */
export const eliminarVenta = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const ventaEncontrada = await Venta.findByPk(id);
        if (!ventaEncontrada) {
            res.status(404).json({ error: "Venta no encontrada." });
        }else{
            await ventaEncontrada.destroy();
            res.status(200).json({ message: "Venta eliminada con éxito." });
        }
    } catch (error) {
        console.error("Error al eliminar la venta:", error);
        res.status(500).json({ error: "Error interno al eliminar la venta." });
    }
};
