import { NextFunction, Request, Response } from 'express';
import erl from 'express-rate-limit';
import { TooManyRequestsError } from '../errors/TooManyRequests';

const rateLimit = erl({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 25, // Limit each IP to 25 requests per windowMs,
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  skipFailedRequests: true, // Skip failed requests
  skipSuccessfulRequests: false, // Skip successful requests
  handler: (req: Request, res: Response, next: NextFunction) => {
    throw new TooManyRequestsError('Too many requests, please try again later.', {
      amount_requests: res.getHeader('RateLimit-Limit'),
      remaining_requests: res.getHeader('RateLimit-Remaining'),
      time_to_reset: res.getHeader('RateLimit-Reset'),
      url: req.originalUrl
    });
  },
});


export default rateLimit;
