import sequelize from "../config/db";
import Autor from "./autor.modelo";
import Categoria from "./categoria.modelo";
import Libro from "./libro.modelo";
import Venta from "./venta.modelo";

Autor.hasMany(Libro, { foreignKey: "id_autor" });
Libro.belongsTo(Autor, { foreignKey: "id_autor" });

Categoria.hasMany(Libro, { foreignKey: "id_categoria" });
Libro.belongsTo(Categoria, { foreignKey: "id_categoria" });

Libro.hasMany(Venta, { foreignKey: "id_libro" });
Venta.belongsTo(Libro, { foreignKey: "id_libro" });

const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Modelos sincronizados con la base de datos.");
    } catch (error) {
        console.error("Error al sincronizar modelos:", error);
    }
};

export { sequelize, syncDatabase, Autor, Categoria, Libro, Venta };
