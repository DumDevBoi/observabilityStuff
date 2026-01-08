import type { NextApiRequest, NextApiResponse } from 'next';
import { metricsMiddleware } from '@/lib/middleware';

type ResponseData = {
  status: string;
  timestamp: string;
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
}

export default metricsMiddleware(handler);