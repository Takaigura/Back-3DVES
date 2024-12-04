import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import Libro from "./libro.modelo"; // Importar Libro

class Categoria extends Model {}

Categoria.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Categoria",
    }
);

export default Categoria;
