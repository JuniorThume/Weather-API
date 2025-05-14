import { Request, Response } from "express";
import { GetForecastService } from '../services/getForecast';

export class ForecastController {

  public async getForecast(req: Request, res: Response) {
    const get_forecast = new GetForecastService();
    const { city } = req.params;

    const result = await get_forecast.execute(city);


    res.status(200).json(result);
    return;
  }
}