import Redis from 'ioredis';

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PASSWORD,
  maxRetriesPerRequest: 1,
  lazyConnect: true,
});

redis.on('error', (err) => {
  if (process.env.NODE_ENV !== 'production') {
    console.error('Redis error:', err);
  }
});

export default redis; 