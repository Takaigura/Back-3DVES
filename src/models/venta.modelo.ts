import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import Libro from "./libro.modelo";

/**
 * Modelo para representar una Venta.
 */
class Venta extends Model {}

/**
 * Definición del modelo Venta.
 */
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
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Venta",
    }
);

/**
 * Relaciones del modelo Venta.
 * Una venta pertenece a un libro.
 */
Venta.belongsTo(Libro, { foreignKey: "id_libro" });

export default Venta;
