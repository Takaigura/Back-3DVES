import { Router } from "express";
import { registrarCategoria, obtenerCategorias } from "../controllers/categoria.controlador";

const router = Router();

router.post("/categorias", registrarCategoria);
router.get("/categorias", obtenerCategorias);

export default router;
