import { Router } from 'express';
import { ForecastController } from '../controllers/forecast';
import { getForecastSchema } from '../schemaValidators/getForecast';

const forecastController = new ForecastController();
const router = Router();

router.get('/forecast/:city', getForecastSchema, forecastController.getForecast);

export default router;