import { httpRequestsTotal, httpRequestDuration } from './metrics';
import type { NextApiRequest, NextApiResponse } from 'next';

export function metricsMiddleware(
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void> | void
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const start = Date.now();
    const method = req.method || 'UNKNOWN';
    const path = req.url || '/';

    const originalEnd = res.end.bind(res);
    
    res.end = function (...args: any[]) {
      const duration = (Date.now() - start) / 1000;
      const status = res.statusCode;

      httpRequestsTotal.inc({
        method,
        path,
        status,
      });

      httpRequestDuration.observe(
        { method, path },
        duration
      );

      return originalEnd(...args);
    } as any;

    try {
      return await handler(req, res);
    } catch (err) {
      res.statusCode = 500;
      throw err;
    }
  };
}