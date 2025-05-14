import { Redis } from 'ioredis';
import { env } from './env';

export const redis = new Redis(env.REDIS_URL);
redis.expire('forecast-locations', 60 * 60 * 12); // 12 hours
redis.on('error', (err) => {
  console.log("❌ - redis.ts - redis.on - err:", err)

  console.error('Redis error:', err);
});

export default redis;
