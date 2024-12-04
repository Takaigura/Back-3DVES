import Venta from "../models/venta.modelo";
import { Op, Sequelize } from "sequelize";

// Servicio para registrar una venta
export const registrarVentaService = async (id_libro: number, cantidad: number) => {
    return await Venta.create({
        id_libro,
        cantidad,
    });
};

export const consultarTotalPorMesService = async () => {
    return await Venta.findAll({
        attributes: [
            [Sequelize.fn("strftime", "%Y-%m", Sequelize.col("fecha")), "mes"], // Extraer año-mes
            [Sequelize.fn("SUM", Sequelize.col("cantidad")), "total_vendido"], // Total de ventas por mes
        ],
        group: ["mes"],
        order: [[Sequelize.col("mes"), "ASC"]], // Ordenar por mes
    });
};

