import { z } from 'zod';

const sortEnum = z.enum(['createdAt:asc', 'createdAt:desc', 'updatedAt:asc', 'updatedAt:desc']);

export const paginationSchema = z.object({
  page: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : 1)),

  limit: z
    .string()
    .optional()
    .transform((val) => (val ? parseInt(val) : 10)),

  sort: sortEnum.optional().transform((val) => {
    if (!val) {
      return { createdAt: 'desc' as const };
    }

    const [field, order] = val.split(':');

    return {
      [field]: order,
    } as { createdAt?: 'asc' | 'desc'; updatedAt?: 'asc' | 'desc' };
  }),

  search: z
    .string()
    .optional()
    .transform((val) => val?.trim() ?? undefined),
});

export type PaginationQuerySchema = z.infer<typeof paginationSchema>;
