import { ApiResponse } from './api-response';

export const successResponse = <T>(args: { data: T; message?: string }): ApiResponse<T> => {
  return {
    status: 'success',
    data: args.data,
    meta: {
      message: args.message,
      timestamp: new Date().toISOString(),
    },
  };
};

export const errorResponse = (args: { message: string; data?: unknown }): ApiResponse<unknown> => {
  return {
    status: 'error',
    data: args.data ?? null,
    meta: {
      message: args.message,
      timestamp: new Date().toISOString(),
    },
  };
};
