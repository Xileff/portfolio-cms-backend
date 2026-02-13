import { RequestHandler, Response } from 'express';
import { ValidatedRequest } from '../common/types/validated-request';

export const withValidated =
  <TBody, TQuery = unknown, TParams = unknown>(
    handler: (req: ValidatedRequest<TBody, TQuery, TParams>, res: Response) => Promise<any>,
  ): RequestHandler =>
  (req, res, next) => {
    Promise.resolve(handler(req as any, res)).catch(next);
  };
