import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: "sqlite", // Tipo de base de datos
    storage: "./database.sqlite", // Ruta del archivo SQLite
});

export default sequelize;
