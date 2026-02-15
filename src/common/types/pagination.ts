// Response
export type PaginationMeta = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type PaginatedResponse<T> = {
  data: T[];
  paginationMeta: PaginationMeta;
};

// Request
export type PaginationQueryParams = {
  search?: string;
  page: number;
  limit: number;
  sort?: {
    createdAt?: 'asc' | 'desc';
    updatedAt?: 'asc' | 'desc';
  };
};

// Repository
export type PaginationRepositoryArgs = {
  skip: number;
  take: number;
  search?: string;
  sort?: {
    createdAt?: 'asc' | 'desc';
    updatedAt?: 'asc' | 'desc';
  };
};
