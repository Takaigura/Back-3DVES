import { Router } from "express";
import { registrarVenta, consultarTotalPorMes } from "../controllers/venta.controlador";

const router = Router();

router.post("/ventas", registrarVenta);
router.get("/ventas/total-por-mes", consultarTotalPorMes);

export default router;

