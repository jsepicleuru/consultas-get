import express from 'express';
import movimientosController from '../controllers/movimientosController.js';

const router = express.Router();

router.get('/movimientos-caja', movimientosController);
router.get('/movimientos-caja/:fechaInicio/:fechaFin', movimientosController);

export default router;