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
};
