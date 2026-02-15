import { PaginationRepositoryArgs } from 'src/common/types/pagination';
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

  findPaginated: async (args: PaginationRepositoryArgs) => {
    const { skip, take, search, sort } = args;

    const [articles, total] = await Promise.all([
      prismaClient.article.findMany({
        skip,
        take,
        orderBy: sort ?? { createdAt: 'asc' },
        where: {
          OR: [
            {
              title: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              summary: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              slug: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        },
      }),
      prismaClient.article.count({
        where: {
          OR: [
            {
              title: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              summary: {
                contains: search,
                mode: 'insensitive',
              },
            },
            {
              slug: {
                contains: search,
                mode: 'insensitive',
              },
            },
          ],
        },
      }),
    ]);

    return { articles, total };
  },
};
