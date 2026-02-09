import { NextFunction, Request, Response } from "express"
import { ZodError, ZodObject } from "zod"
import { BaseResponse } from "../common/base-response"


export const validate = (schema: ZodObject) => 
(req: Request, res: Response, next: NextFunction) => {
  try {
    schema.parse({
      body: req.body,
      query: req.query,
      params: req.params,
    });

    next();
  } catch (error: any) {
    const response: BaseResponse<{}> = {
      message: "Validation failed",
      data: error.errors,
    }

    return res.status(400).json(response);
  }
}