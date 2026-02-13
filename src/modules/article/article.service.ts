import { Prisma } from 'src/generated/prisma/client';
import { articleRepository } from './article.repository';
import { CreateArticleRequest } from './article.schema';
import { mapArticleToDTO } from './article.mapper';
import { getPaginationParams } from '../../common/utils/pagination';
import { buildPaginationMeta } from '../../common/utils/pagination-meta';
import { ArticleResponseDTO } from './article.dto';
import { PaginatedResponse } from '../../common/types/pagination';

export const createArticle = async (data: CreateArticleRequest) => {
  const slug = data.title.toLowerCase().replace(/\s+/g, '-');

  const article = await articleRepository.create({
    ...data,
    slug,
    content: data.content as Prisma.InputJsonValue,
  });

  return mapArticleToDTO(article);
};

export const getArticles = async (args: {
  page: number;
  limit: number;
}): Promise<PaginatedResponse<ArticleResponseDTO>> => {
  const { skip, take } = getPaginationParams(args.page, args.limit);

  const { articles, total } = await articleRepository.findPaginated({ skip, take });

  return {
    data: articles.map(mapArticleToDTO),
    paginationMeta: buildPaginationMeta(args.page, args.limit, total),
  };
};
