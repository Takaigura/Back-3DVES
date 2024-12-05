import express from "express";
import {
    registrarVenta,
    obtenerVentas,
    eliminarVenta,
    totalVentasPorMes,
} from "../services/venta.servicio";

const router = express.Router();

// Registrar una nueva venta
router.post("/", registrarVenta);

// Obtener todas las ventas
router.get("/", obtenerVentas);

// Consultar total de ventas por mes
router.get("/totales-mensuales", totalVentasPorMes);

// Eliminar una venta por ID
router.delete("/:id", eliminarVenta);

export default router;

