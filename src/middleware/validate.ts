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
    } catch (error: any) {
      const response: BaseResponse<{}> = {
        message: 'Validation failed',
        data: error.errors,
      };

      return res.status(400).json(response);
    }
  };
