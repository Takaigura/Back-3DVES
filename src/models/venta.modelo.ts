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
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Venta",
    }
);

Venta.belongsTo(Libro, { foreignKey: "id_libro" });

export default Venta;
