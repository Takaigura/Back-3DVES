import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import Libro from "./libro.modelo";

class Venta extends Model {}

Venta.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        id_libro: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Libro, // Referencia al modelo Libro
                key: "id",
            },
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Venta",
    }
);


export default Venta;
