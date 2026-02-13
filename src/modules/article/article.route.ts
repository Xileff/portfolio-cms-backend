import { Router } from 'express';
import { validate } from '../../middleware/validate';
import { CreateArticleRequest, createArticleSchema } from './article.schema';
import * as controller from './article.controller';
import { PaginationQuery, paginationSchema } from '../../common/schemas/pagination.schema';
import { withValidated } from '../../middleware/validated-handler';

const articleRouter = Router();

articleRouter.post(
  '/article',
  validate({ bodySchema: createArticleSchema }),
  withValidated<CreateArticleRequest>(controller.createArticle),
);

articleRouter.get(
  '/article',
  validate({ querySchema: paginationSchema }),
  withValidated<unknown, PaginationQuery>(controller.getArticles),
);

export default articleRouter;
