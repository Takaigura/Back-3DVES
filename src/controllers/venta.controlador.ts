import { Request, Response } from "express";
import Venta from "../models/venta.modelo";
import Libro from "../models/libro.modelo";
import { Op, Sequelize } from "sequelize";

export const registrarVenta = async (req: Request, res: Response): Promise <void> => {
    try {
        const { id_libro, cantidad } = req.body;
        let result;

        if (!id_libro || !cantidad) {
            result =  res.status(400).json({ error: "Campos requeridos: id_libro, cantidad" });
        }

        const libro = await Libro.findByPk(id_libro);
        if (!libro) {
            res.status(404).json({ error: "El libro no existe" });
        }

        const venta = await Venta.create({
            id_libro,
            cantidad,
        });

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Error al registrar la venta" });
    }
};

export const consultarTotalPorMes = async (req: Request, res: Response) => {
    try {
        const ventas = await Venta.findAll({
            attributes: [
                [Sequelize.fn("strftime", "%Y-%m", Sequelize.col("fecha")), "mes"],
                [Sequelize.fn("SUM", Sequelize.col("cantidad")), "total_vendido"],
            ],
            group: ["mes"],
        });

        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: "Error al consultar total vendido por mes" });
    }
};
