import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

class Autor extends Model {}

Autor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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



