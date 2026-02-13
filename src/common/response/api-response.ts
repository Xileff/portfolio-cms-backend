export type ApiMeta = {
  message?: string;
  timestamp: string;
};

export type ApiResponse<T> = {
  status: 'success' | 'error';
  data: T;
  meta: ApiMeta;
};
