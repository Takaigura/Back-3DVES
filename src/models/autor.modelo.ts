import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

/**
 * Modelo para representar a un autor de libros.
 */
class Autor extends Model {}

/**
 * Definición del modelo Autor con sus atributos.
 */
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



