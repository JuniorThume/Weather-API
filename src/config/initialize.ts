import { env } from './env';
import { redis } from './redis';
import { app } from '../index';

export default function initializeServer() {
  redis.on('connect', () => {
    console.log('✅ - Redis connected!');
    app.listen(env.SERVER_PORT, () => {
      console.log('🚀 - Server is running!');
    });
  });
}