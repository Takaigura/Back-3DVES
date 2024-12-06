import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import autorRoutes from "./routes/autor.ruta";
import categoriaRoutes from "./routes/categoria.ruta";
import libroRoutes from "./routes/libro.ruta";
import ventaRoutes from "./routes/venta.ruta";

// Crear una instancia de la aplicación express
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Rutas de la aplicación
app.use("/autores", autorRoutes); // Rutas para gestionar autores
app.use("/categorias", categoriaRoutes); // Rutas para gestionar categorías
app.use("/libros", libroRoutes); // Rutas para gestionar libros
app.use("/ventas", ventaRoutes); // Rutas para gestionar ventas

// Exportar la aplicación para su uso en otros módulos
export default app;
