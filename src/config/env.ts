import 'dotenv/config';
import z from 'zod';

const env = z.object({
  REDIS_URL: z.string().url(),
  SERVER_PORT: z.string().transform((value) => Number(value)),
  API_KEY: z.string()
}).parse(process.env);

export { env }
