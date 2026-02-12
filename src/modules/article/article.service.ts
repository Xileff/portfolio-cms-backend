import { prismaClient } from '../../config/db';
import { CreateArticleRequest } from './article.schema';

export const createArticle = async (req: CreateArticleRequest) => {
  return prismaClient.article.create({
    data: {
      title: req.title,
      content: req.content,
      slug: 'slug',
    },
  });
};
