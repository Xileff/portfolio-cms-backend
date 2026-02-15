import { articleRepository } from './article.repository';
import { mapArticleToDTO } from './article.mapper';
import { getPaginationParams } from '../../common/utils/pagination';
import { buildPaginationMeta } from '../../common/utils/pagination-meta';
import { ArticleResponseDTO } from './article.dto';
import { PaginatedResponse, PaginationQueryParams } from '../../common/types/pagination';

export const getArticles = async (
  params: PaginationQueryParams,
): Promise<PaginatedResponse<ArticleResponseDTO>> => {
  const { skip, take, sort, search } = getPaginationParams(params);

  const { articles, total } = await articleRepository.findPaginated({ skip, take, search, sort });

  return {
    data: articles.map(mapArticleToDTO),
    paginationMeta: buildPaginationMeta(params.page, params.limit, total),
  };
};
