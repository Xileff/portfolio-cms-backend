import { NextFunction, Request, Response } from 'express';
import { ZodError, ZodObject } from 'zod';
import { BaseResponse } from '../common/base-response';

export const validate =
  (args: { querySchema?: ZodObject; paramsSchema?: ZodObject; bodySchema?: ZodObject }) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { bodySchema, paramsSchema, querySchema } = args;

      if (bodySchema) {
        const parsedBody = bodySchema.parse(req.body);
        req.body = parsedBody;
      }

      next();
    } catch (error) {
      next(error);
    }
  };
