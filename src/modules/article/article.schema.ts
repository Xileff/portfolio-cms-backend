import z from 'zod';

export const createArticleRequest = z.object({
  body: z.object({
    title: z.string().min(3),
    summary: z.string().min(1).optional(),
    content: z.any(),
  }),
});

export type CreateArticleRequestBody = z.infer<typeof createArticleRequest>['body'];
