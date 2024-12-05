import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import autorRoutes from "./routes/autor.ruta";
import categoriaRoutes from "./routes/categoria.ruta";
import libroRoutes from "./routes/libro.ruta";
import ventaRoutes from "./routes/venta.ruta";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/autores", autorRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/libros", libroRoutes);
app.use("/ventas", ventaRoutes);

export default app;
