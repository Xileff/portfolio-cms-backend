import { Router } from 'express';
import { validate } from '../../middleware/validate';
import { createArticleRequest } from './article.schema';
import * as controller from './article.controller';

const articleRouter = Router();

articleRouter.post('/article', validate(createArticleRequest), controller.createArticle);

export default articleRouter;
