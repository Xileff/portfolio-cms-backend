import { Prisma } from 'src/generated/prisma/client';
import { articleRepository } from './article.repository';
import { CreateArticleRequest } from './article.schema';

export const createArticle = async (data: CreateArticleRequest) => {
  const slug = data.title.toLowerCase().replace(/\s+/g, '-');

  return articleRepository.create({
    ...data,
    slug,
    content: data.content as Prisma.InputJsonValue,
  });
};
