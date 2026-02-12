import { Article } from 'src/generated/prisma/client';
import { ArticleResponseDTO } from './article.dto';

export const mapArticleToDTO = (article: Article): ArticleResponseDTO => {
  return {
    id: article.id,
    title: article.title,
    summary: article.summary,
    slug: article.slug,
    createdAt: article.createdAt,
  };
};
