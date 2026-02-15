import { PaginationQueryParams, PaginationRepositoryArgs } from '../types/pagination';

export const getPaginationParams = (args: PaginationQueryParams): PaginationRepositoryArgs => {
  const { search, limit, page, sort } = args;

  const skip = (page - 1) * limit;

  return { skip, take: limit, sort, search };
};
