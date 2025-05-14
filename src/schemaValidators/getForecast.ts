import { celebrate, Joi } from 'celebrate';

export const getForecastSchema = celebrate({
  params: Joi.object({
    city: Joi.string().required().lowercase()
  })
});