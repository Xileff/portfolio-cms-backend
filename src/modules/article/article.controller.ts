import { Request, Response } from 'express';
import * as articleService from './article.service';
import { PaginationQuery } from 'src/common/schemas/pagination.schema';
import { CreateArticleRequest } from './article.schema';
import { ValidatedRequest } from 'src/common/types/validated-request';

export const createArticle = async (req: ValidatedRequest<CreateArticleRequest>, res: Response) => {
  const article = await articleService.createArticle(req.validated.body);
  res.json(article);
};

export const getArticles = async (
  req: ValidatedRequest<unknown, PaginationQuery>,
  res: Response,
) => {
  const { page, limit } = req.validated.query;

  const result = await articleService.getArticles(Number(page), Number(limit));

  res.json(result);
};
