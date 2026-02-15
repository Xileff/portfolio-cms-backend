import { Request, Response } from 'express';
import * as articleCommandService from './article.command-service';
import * as articleQueryService from './article.query-service';
import { PaginationQuerySchema } from 'src/common/schemas/pagination.schema';
import { CreateArticleRequest } from './article.schema';
import { ValidatedRequest } from '../../common/types/validated-request';
import { successResponse } from '../../common/response/response';

export const createArticle = async (req: ValidatedRequest<CreateArticleRequest>, res: Response) => {
  const article = await articleCommandService.createArticle(req.validated.body);
  res.json(successResponse({ data: article, message: 'Article created successfully' }));
};

export const getArticles = async (
  req: ValidatedRequest<unknown, PaginationQuerySchema>,
  res: Response,
) => {
  const { page, limit, sort, search } = req.validated.query;

  const result = await articleQueryService.getArticles({
    page: Number(page),
    limit: Number(limit),
    sort,
    search,
  });

  res.json(successResponse({ data: result, message: 'Articles retrieved succesfully' }));
};
