import { NextFunction, Request, Response } from 'express';
import { ZodObject } from 'zod';

export const validate =
  <TBody = unknown, TQuery = unknown, TParams = unknown>(args: {
    bodySchema?: ZodObject;
    querySchema?: ZodObject;
    paramsSchema?: ZodObject;
  }) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated: any = {};

      if (args.bodySchema) {
        validated.body = args.bodySchema.parse(req.body);
      }

      if (args.querySchema) {
        validated.query = args.querySchema.parse(req.query);
      }

      if (args.paramsSchema) {
        validated.params = args.paramsSchema.parse(req.params);
      }

      (req as any).validated = validated;

      console.log(req.url);
      console.log(validated);

      next();
    } catch (error) {
      next(error);
    }
  };
