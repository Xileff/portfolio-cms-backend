import { PaginationMeta } from '../common/types/pagination';

export const buildPaginationMeta = (page: number, limit: number, total: number): PaginationMeta => {
  return {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  };
};
