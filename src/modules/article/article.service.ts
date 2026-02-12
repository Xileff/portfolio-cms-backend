import { prismaClient } from '../../config/db';
import { CreateArticleRequestBody } from './article.schema';

export const createArticle = async (req: CreateArticleRequestBody) => {
  return prismaClient.article.create({
    data: {
      title: req.title,
      content: req.content,
      slug: 'slug',
    },
  });
};
