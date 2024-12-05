import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";
import Autor from "./autor.modelo";
import Categoria from "./categoria.modelo";
import Venta from "./venta.modelo";

class Libro extends Model {}

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

Libro.belongsTo(Autor, { foreignKey: "id_autor" });
Libro.belongsTo(Categoria, { foreignKey: "id_categoria"});
Libro.hasMany(Venta, { foreignKey: "id_libro" });

export default Libro;
