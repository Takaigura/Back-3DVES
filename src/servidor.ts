import app from "./app";
import sequelize from "./config/db";

// Definimos el puerto donde el servidor escuchará
const PORT = 3000;

/**
 * Función para iniciar el servidor.
 * Primero sincroniza la base de datos y luego arranca el servidor.
 */
const startServer = async () => {
    try {
        // Intentamos sincronizar la base de datos con los modelos definidos
        await sequelize.sync();
        console.log("Base de datos conectada exitosamente.");

        // Arrancamos el servidor en el puerto especificado
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        // Error si no se inicia el servidor
        console.error("Error al iniciar el servidor:", error);
    }
};

// Iniciamos el servidor
startServer();


