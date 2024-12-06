import sequelize from "../config/db";
import Autor from "./autor.modelo";
import Categoria from "./categoria.modelo";
import Libro from "./libro.modelo";
import Venta from "./venta.modelo";

/**
 * Definición de relaciones entre los modelos.
 */

// Relación entre Autor y Libro: Un autor tiene muchos libros
Autor.hasMany(Libro, { foreignKey: "id_autor" });
Libro.belongsTo(Autor, { foreignKey: "id_autor" });

// Relación entre Categoria y Libro: Una categoría tiene muchos libros
Categoria.hasMany(Libro, { foreignKey: "id_categoria" });
Libro.belongsTo(Categoria, { foreignKey: "id_categoria" });

// Relación entre Libro y Venta: Un libro tiene muchas ventas
Libro.hasMany(Venta, { foreignKey: "id_libro" });
Venta.belongsTo(Libro, { foreignKey: "id_libro" });

/**
 * Sincroniza los modelos con la base de datos.
 * Utiliza la opción { alter: true } para aplicar cambios en los modelos.
 */
const syncDatabase = async (): Promise<void> => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Modelos sincronizados con la base de datos.");
    } catch (error) {
        console.error("Error al sincronizar modelos:", error);
    }
};

export { sequelize, syncDatabase, Autor, Categoria, Libro, Venta };
