import { Router } from "express";
import { registrarLibro, consultarLibros } from "../controllers/libro.controlador";

const router = Router();

router.post("/libros", registrarLibro);
router.get("/libros", consultarLibros);

export default router;
