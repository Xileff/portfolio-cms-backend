import { prismaClient } from '../../config/db';
import { Prisma } from 'src/generated/prisma/client';

export const articleRepository = {
  create: (data: Prisma.ArticleCreateInput) => {
    return prismaClient.article.create({
      data,
    });
  },

  findBySlug: (slug: string) => {
    return prismaClient.article.findUnique({
      where: { slug },
    });
  },

  findAll: () => {
    return prismaClient.article.findMany();
  },

  findPaginated: async (args: { skip: number; take: number; search?: string }) => {
    const { skip, take, search } = args;

    const [articles, total] = await Promise.all([
      prismaClient.article.findMany({ skip, take }),
      prismaClient.article.count(),
    ]);

    return { articles, total };
  },
};
