import z from 'zod';

export const createArticleSchema = z.object({
  title: z.string().min(3),
  summary: z.string().min(1).optional(),
  content: z.any(),
});

export const updateArticleSchema = z.object({
  title: z.string().min(3),
  summary: z.string().min(1).optional(),
  content: z.any(),
});

export type CreateArticleRequest = z.infer<typeof createArticleSchema>;
export type UpdateArticleRequest = z.infer<typeof updateArticleSchema>;
