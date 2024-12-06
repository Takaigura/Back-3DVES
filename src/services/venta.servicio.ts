import { Request, Response } from "express";
import { Op, Sequelize } from "sequelize";
import Venta from "../models/venta.modelo";

// Registrar una nueva venta
export const registrarVenta = async (req: Request, res: Response) => {
    try {
        const { id_libro, cantidad, total } = req.body;

        if (!id_libro || !cantidad || !total) {
            res.status(400).json({ error: "Libro, cantidad y total son requeridos" });
        }else{
            const venta = await Venta.create({ id_libro, cantidad, total });
            res.status(201).json(venta);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al registrar la venta" });
    }
};

// Obtener todas las ventas
export const obtenerVentas = async (_req: Request, res: Response) => {
    try {
        const ventas = await Venta.findAll();
        res.status(200).json(ventas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener las ventas" });
    }
};

export const totalVentasPorMes = async (req: Request, res: Response) => {
    try {
        const totales = await Venta.findAll({
            attributes: [
                [Sequelize.fn("strftime", "%Y-%m", Sequelize.col("createdAt")), "mes"],
                [Sequelize.fn("SUM", Sequelize.col("total")), "totalVentas"]
            ],
            group: ["mes"],
            order: [["mes", "ASC"]],
        });

        res.json(totales);
    } catch (error) {
        console.error("Error en totalVentasPorMes:", error);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

// Eliminar una venta por ID
export const eliminarVenta = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const venta = await Venta.findByPk(id);
        if (!venta) {
            res.status(404).json({ error: "Venta no encontrada" });
        }else{  
            await venta.destroy();
            res.status(200).json({ message: "Venta eliminada con éxito" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al eliminar la venta" });
    }
};



