// import * as Article from '../../generated/prisma/models/Article'
import { prismaClient } from '../../config/db';

export const createArticle = async (data: any) => {
  return prismaClient.article.create({
    data: {
      title: data.title,
      summary: data.summary,
      content: data.content,
      slug: 'slug',
    },
  });
};
