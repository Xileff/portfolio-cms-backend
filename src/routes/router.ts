import { Router } from 'express';
import articleRouter from '../modules/article/article.route';

const appRouter = Router();

appRouter.use(articleRouter);

export default appRouter;
