import { Sequelize } from "sequelize";

/**
 * Configuración de la conexión a la base de datos.
 * Utiliza SQLite como base de datos y especifica la ruta del archivo.
 */
const sequelize = new Sequelize({
    dialect: "sqlite",  // Tipo de base de datos 
    storage: "./database.sqlite",  // Ruta del archivo donde se almacenará la base de datos SQLite
});

export default sequelize;
