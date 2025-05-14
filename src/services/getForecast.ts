import { env } from "../config/env";
import { axiosInstance } from "../config/axios";
import { AxiosError, AxiosResponse } from "axios";
import { NotFoundError } from "../errors/NotFound";
import { BadRequestError } from "../errors/BadRequest";
import redis from '../config/redis';

export class GetForecastService {
  public async execute(city: string): Promise<AxiosResponse | undefined> {
    const forecastCached = await redis.hget('forecast-locations', city);
    if (forecastCached) {
      console.log('result from cache');

      return JSON.parse(forecastCached);
    }

    try {
      const forecast = await axiosInstance.get(`${city}?key=${env.API_KEY}`);
      redis.hset('forecast-locations', city, JSON.stringify(forecast.data));
      return forecast.data;
    } catch (error: AxiosError | any) {
      switch (error.status) {
        case 400:
          throw new BadRequestError("Bad Request", {
            city: city,
          });
        case 429:
          throw new Error("Too Many Requests");
        case 401| 404 | 500:
          throw new Error("Internal Server Error");
      }
    }
  }
}
