import Venta from "../models/venta.modelo";
import { Op, Sequelize } from "sequelize";

export const totalVendidoPorMes = async () => {
    return await Venta.findAll({
        attributes: [
            [Sequelize.fn("strftime", "%Y-%m", Sequelize.col("fecha")), "mes"],
            [Sequelize.fn("SUM", Sequelize.col("cantidad")), "total_vendido"],
        ],
        group: ["mes"],
    });
};
