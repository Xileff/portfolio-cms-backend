import { Request, Response } from 'express';
import * as articleService from './article.service';
import { PaginationQuery } from 'src/common/schemas/pagination.schema';
import { CreateArticleRequest } from './article.schema';
import { ValidatedRequest } from '../../common/types/validated-request';
import { successResponse } from '../../common/response/response';

export const createArticle = async (req: ValidatedRequest<CreateArticleRequest>, res: Response) => {
  const article = await articleService.createArticle(req.validated.body);
  res.json(successResponse({ data: article, message: 'Article created successfully' }));
};

export const getArticles = async (
  req: ValidatedRequest<unknown, PaginationQuery>,
  res: Response,
) => {
  const { page, limit } = req.validated.query;

  const result = await articleService.getArticles({ page: Number(page), limit: Number(limit) });

  res.json(successResponse({ data: result, message: 'Articles retrieved succesfully' }));
};
