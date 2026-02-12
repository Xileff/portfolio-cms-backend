import { Request, Response } from 'express';
import * as articleService from './article.service';

export const createArticle = async (req: Request, res: Response) => {
  const article = await articleService.createArticle(req.body);
  res.json(article);
};
