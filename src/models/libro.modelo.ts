import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import Autor from "./autor.modelo";
import Categoria from "./categoria.modelo";

/**
 * Modelo para representar un libro.
 */
class Libro extends Model {}

/**
 * Definición del modelo Libro con sus atributos.
 */
Libro.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_autor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Autor,
                key: "id",
            },
        },
        id_categoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Categoria,
                key: "id",
            },
        },
    },
    {
        sequelize,
        modelName: "Libro",
    }
);

/**
 * Relaciones del modelo Libro:
 * - Un libro pertenece a un autor.
 * - Un libro pertenece a una categoría.
 */
Libro.belongsTo(Autor, { foreignKey: "id_autor" });
Libro.belongsTo(Categoria, { foreignKey: "id_categoria" });

export default Libro;

