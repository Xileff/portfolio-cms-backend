import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/app-error';
import { ZodError } from 'zod';
import { errorResponse } from '../common/response/response';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      message: 'Validation failed',
      errors: err.issues.map((e) => ({
        field: e.path.join('.'),
        message: e.message,
      })),
    });
  }

  if (err instanceof AppError) {
    return res.status(err.statusCode).json(errorResponse({ message: err.message }));
  }

  console.error(err);

  return res.status(500).json(errorResponse({ message: 'Internal Server Error' }));
};
