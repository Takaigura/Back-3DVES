import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

/**
 * Modelo para representar una categoría de libros.
 */
class Categoria extends Model {}

/**
 * Definición del modelo Categoria con sus atributos.
 */
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
