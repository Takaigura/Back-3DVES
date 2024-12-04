import express from "express";
import libroRoutes from "./routes/libro.ruta";
import ventaRoutes from "./routes/venta.ruta";
import autorRoutes from "./routes/autor.ruta";
import categoriaRoutes from "./routes/categoria.ruta";

const app = express();
app.use("/api", autorRoutes);
app.use("/api", categoriaRoutes);
app.use(express.json());
app.use("/api", ventaRoutes);
app.use("/api", libroRoutes);

export default app;
