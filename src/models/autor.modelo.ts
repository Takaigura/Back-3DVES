import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import Libro from "./libro.modelo";

class Autor extends Model {}

Autor.init(
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
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: "Autor",
    }
);

export default Autor;
