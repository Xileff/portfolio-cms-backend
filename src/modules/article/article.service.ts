import { Prisma } from 'src/generated/prisma/client';
import { articleRepository } from './article.repository';
import { CreateArticleRequest } from './article.schema';
import { mapArticleToDTO } from './article.mapper';

export const createArticle = async (data: CreateArticleRequest) => {
  const slug = data.title.toLowerCase().replace(/\s+/g, '-');

  const article = await articleRepository.create({
    ...data,
    slug,
    content: data.content as Prisma.InputJsonValue,
  });

  return mapArticleToDTO(article);
};
