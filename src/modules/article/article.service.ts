import { Prisma } from 'src/generated/prisma/client';
import { articleRepository } from './article.repository';
import { CreateArticleRequest } from './article.schema';
import { mapArticleToDTO } from './article.mapper';
import { getPaginationParams } from '../../common/utils/pagination';
import { buildPaginationMeta } from '../../common/utils/pagination-meta';

export const createArticle = async (data: CreateArticleRequest) => {
  const slug = data.title.toLowerCase().replace(/\s+/g, '-');

  const article = await articleRepository.create({
    ...data,
    slug,
    content: data.content as Prisma.InputJsonValue,
  });

  return mapArticleToDTO(article);
};

export const getArticles = async (page: number, limit: number) => {
  const { skip, take } = getPaginationParams(page, limit);

  const { articles, total } = await articleRepository.findPaginated({ skip, take });

  return {
    data: articles.map(mapArticleToDTO),
    meta: buildPaginationMeta(page, limit, total),
  };
};
