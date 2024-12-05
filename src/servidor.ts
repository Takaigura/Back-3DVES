import app from "./app";
import sequelize from "./config/db";

const PORT = 3000;

const startServer = async () => {
    try {
        await sequelize.sync(); // Sincroniza la base de datos
        console.log("Base de datos conectada");
        app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
    } catch (error) {
        console.error("Error al iniciar el servidor", error);
    }
};

startServer();

