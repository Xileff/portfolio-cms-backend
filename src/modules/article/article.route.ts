import { Router } from "express";
import { validate } from "../../middleware/validate";
import { createArticleSchema } from "./article.schema";
import * as controller from "./article.controller";

const articleRouter = Router();

articleRouter.post(
  "/article",
  validate(createArticleSchema),
  controller.createArticle
);

export default articleRouter;